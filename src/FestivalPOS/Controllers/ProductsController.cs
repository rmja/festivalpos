using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using FestivalPOS.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Net.Http.Headers;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Processing;
using SystemTextJsonPatch;

namespace FestivalPOS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController(PosContext db, BlobServiceClient storageAccount)
        : ControllerBase
    {
        private static bool _productImagesContainerExists = false;

        [HttpPost]
        public async Task<Product> Create(Product product)
        {
            db.Products.Add(product);

            await db.SaveChangesAsync();

            return product;
        }

        [HttpGet]
        public Task<List<Product>> GetAll()
        {
            return db.Products.OrderBy(x => x.Name).ToListAsync();
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<Product>> GetById(int id)
        {
            var product = await db.Products.FirstOrDefaultAsync(x => x.Id == id);

            if (product == null)
            {
                return NotFound();
            }

            return product;
        }

        [HttpPatch("{id:int}")]
        public async Task<ActionResult<Product>> UpdateProduct(
            int id,
            JsonPatchDocument<Product> patch
        )
        {
            var product = await db.Products.FirstOrDefaultAsync(x => x.Id == id);

            if (product == null)
            {
                return NotFound();
            }

            patch.ApplyTo(product);

            await db.SaveChangesAsync();

            return product;
        }

        [HttpGet("{id:int}/Image")]
        public async Task<ActionResult> GetImage(
            int id,
            string kind = "preview",
            CancellationToken cancellationToken = default
        )
        {
            var product = await db.Products.FirstOrDefaultAsync(x => x.Id == id, cancellationToken);
            if (product == null)
            {
                return NotFound();
            }

            var blobName = kind switch
            {
                "preview" => product.PreviewImageName,
                "thumbnail" => product.ThumbnailImageName,
                _ => null,
            };

            if (blobName == null)
            {
                return BadRequest("Invalid image kind");
            }

            var container = await GetImagesBlobContainerClientAsync();

            var blobClient = container.GetBlobClient(blobName);

            try
            {
                var properties = await blobClient.GetPropertiesAsync(
                    cancellationToken: cancellationToken
                );

                var responseHeaders = Response.GetTypedHeaders();
                responseHeaders.ContentType = new MediaTypeHeaderValue(
                    properties.Value.ContentType
                );
                responseHeaders.ETag = new EntityTagHeaderValue(properties.Value.ETag.ToString());
                responseHeaders.ContentLength = properties.Value.ContentLength;
                responseHeaders.LastModified = properties.Value.LastModified;
                await blobClient.DownloadToAsync(Response.Body, cancellationToken);

                return new EmptyResult();
            }
            catch (Azure.RequestFailedException e)
            {
                return StatusCode(e.Status);
            }
        }

        [HttpPut("{id:int}/Image")]
        public async Task<ActionResult<Product>> UploadImage(int id, [FromForm] IFormFile file)
        {
            var product = await db.Products.FirstOrDefaultAsync(x => x.Id == id);
            if (product == null)
            {
                return NotFound();
            }

            var container = await GetImagesBlobContainerClientAsync();
            using (var inputStream = file.OpenReadStream())
            using (var previewImage = Image.Load(inputStream))
            {
                var thumbnailImage = previewImage.Clone(x => x.Resize(150, 120));

                var version = Guid.NewGuid();
                product.PreviewImageName = $"{id}/{version}.300x240.png";
                product.ThumbnailImageName = $"{id}/{version}.150x120.png";
                await UploadAsync(previewImage, product.PreviewImageName);
                await UploadAsync(thumbnailImage, product.ThumbnailImageName);
            }

            await db.SaveChangesAsync();

            return product;

            async Task UploadAsync(Image image, string name)
            {
                var blob = container.GetBlobClient(name);
                using var stream = new MemoryStream();
                image.SaveAsPng(stream);

                stream.Position = 0;
                await blob.UploadAsync(stream);
                await blob.SetHttpHeadersAsync(new BlobHttpHeaders { ContentType = "image/png" });
            }
        }

        private async Task<BlobContainerClient> GetImagesBlobContainerClientAsync()
        {
            var container = storageAccount.GetBlobContainerClient("product-images");

            if (!_productImagesContainerExists)
            {
                await container.CreateIfNotExistsAsync();
                await container.SetAccessPolicyAsync(PublicAccessType.Blob);
                _productImagesContainerExists = true;
            }

            return container;
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var product = await db.Products.FirstOrDefaultAsync(x => x.Id == id);

            if (product == null)
            {
                return NotFound();
            }

            product.IsDeleted = true;

            await db.SaveChangesAsync();

            return NoContent();
        }

        [HttpGet("/api/PointOfSales/{pointOfSaleId:int}/Products")]
        public Task<List<PointOfSaleProduct>> GetProductsByPointOfSaleId(int pointOfSaleId)
        {
            return db
                .PointOfSaleProducts.Include(x => x.Product)
                .Where(x => x.PointOfSaleId == pointOfSaleId)
                .OrderBy(x => x.Position)
                .ToListAsync();
        }

        [HttpPatch("/api/PointOfSales/{pointOfSaleId:int}/Products")]
        public async Task<List<PointOfSaleProduct>> UpdateProductsByPointOfSaleId(
            int pointOfSaleId,
            JsonPatchDocument<IList<PointOfSaleProduct>> patch
        )
        {
            var items = await db
                .PointOfSaleProducts.Where(x => x.PointOfSaleId == pointOfSaleId)
                .OrderBy(x => x.Position)
                .Include(x => x.Product)
                .ToListAsync();
            var patchedItems = items.ToList();

            patch.ApplyTo(patchedItems);

            db.Products.AddRange(patchedItems.Select(x => x.Product).Where(x => x.Id == default));
            db.PointOfSaleProducts.RemoveRange(items);

            foreach (var item in patchedItems)
            {
                item.PointOfSaleId = pointOfSaleId;
                item.ProductId = item.Product.Id;
            }

            for (var position = 0; position < patchedItems.Count; position++)
            {
                var item = patchedItems[position];

                db.PointOfSaleProducts.Add(
                    new PointOfSaleProduct()
                    {
                        PointOfSaleId = item.PointOfSaleId,
                        ProductId = item.Product.Id,
                        Position = position,
                        Presale = item.Presale,
                        IsServing = item.IsServing
                    }
                );
            }

            await db.SaveChangesAsync();

            return patchedItems;
        }
    }
}
