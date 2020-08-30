using FestivalPOS.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Storage;
using Microsoft.Azure.Storage.Blob;
using Microsoft.EntityFrameworkCore;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Processing;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace FestivalPOS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly PosContext _db;
        private readonly CloudStorageAccount _storageAccount;
        private static bool _productImagesContainerExists = false;

        public ProductsController(PosContext db, CloudStorageAccount storageAccount)
        {
            _db = db;
            _storageAccount = storageAccount;
        }

        [HttpPost]
        public async Task<Product> Create(Product product)
        {
            _db.Products.Add(product);

            await _db.SaveChangesAsync();

            return product;
        }

        [HttpGet]
        public Task<List<Product>> GetAll()
        {
            return _db.Products.OrderBy(x => x.Name).ToListAsync();
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<Product>> GetById(int id)
        {
            var product = await _db.Products.FirstOrDefaultAsync(x => x.Id == id);

            if (product == null)
            {
                return NotFound();
            }

            return product;
        }

        [HttpPatch("{id:int}")]
        public async Task<ActionResult<Product>> UpdateProduct(int id, JsonPatchDocument<Product> patch)
        {
            var product = await _db.Products.FirstOrDefaultAsync(x => x.Id == id);

            if (product == null)
            {
                return NotFound();
            }

            patch.ApplyTo(product);

            await _db.SaveChangesAsync();

            return product;
        }

        [HttpPut("{id:int}/Image")]
        public async Task<ActionResult<Product>> UploadImage(int id, [FromForm] IFormFile file)
        {
            var product = await _db.Products.FirstOrDefaultAsync(x => x.Id == id);

            if (product == null)
            {
                return NotFound();
            }

            var blobClient = _storageAccount.CreateCloudBlobClient();
            var container = blobClient.GetContainerReference("product-images");

            if (!_productImagesContainerExists)
            {
                await container.CreateIfNotExistsAsync();
                await container.SetPermissionsAsync(new BlobContainerPermissions()
                {
                    PublicAccess = BlobContainerPublicAccessType.Blob
                });
                _productImagesContainerExists = true;
            }

            using (var inputStream = file.OpenReadStream())
            using (var previewImage = Image.Load(inputStream))
            {
                var thumbnailImage = previewImage.Clone(x => x.Resize(150, 120));

                var version = Guid.NewGuid();
                product.PreviewImageUrl = await UploadAsync(previewImage, $"{id}/{version}.300x240.png");
                product.ThumbnailImageUrl = await UploadAsync(thumbnailImage, $"{id}/{version}.150x120.png");
            }

            await _db.SaveChangesAsync();

            return product;

            async Task<string> UploadAsync(Image image, string name)
            {
                var blob = container.GetBlockBlobReference(name);

                using (var stream = new MemoryStream())
                {
                    image.SaveAsPng(stream);

                    stream.Position = 0;
                    await blob.UploadFromStreamAsync(stream);

                    blob.Properties.ContentType = "image/png";
                    await blob.SetPropertiesAsync();
                }

                return blob.Uri.ToString();
            }
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var product = await _db.Products.FirstOrDefaultAsync(x => x.Id == id);

            if (product == null)
            {
                return NotFound();
            }

            product.IsDeleted = true;

            await _db.SaveChangesAsync();

            return NoContent();
        }

        [HttpGet("/api/PointOfSales/{pointOfSaleId:int}/Products")]
        public Task<List<PointOfSaleProduct>> GetProductsByPointOfSaleId(int pointOfSaleId)
        {
            return _db.PointOfSaleProducts
                .Include(x => x.Product)
                .Where(x => x.PointOfSaleId == pointOfSaleId)
                .OrderBy(x => x.Position)
                .ToListAsync();
        }

        [HttpPatch("/api/PointOfSales/{pointOfSaleId:int}/Products")]
        public async Task<List<PointOfSaleProduct>> UpdateProductsByPointOfSaleId(int pointOfSaleId, JsonPatchDocument<IList<PointOfSaleProduct>> patch)
        {
            var items = await _db.PointOfSaleProducts
                .Where(x => x.PointOfSaleId == pointOfSaleId)
                .OrderBy(x => x.Position)
                .Include(x => x.Product)
                .ToListAsync();
            var patchedItems = items.ToList();

            patch.ApplyTo(patchedItems);

            _db.Products.AddRange(patchedItems.Select(x => x.Product).Where(x => x.Id == default));
            _db.PointOfSaleProducts.RemoveRange(items);

            foreach (var item in patchedItems)
            {
                item.PointOfSaleId = pointOfSaleId;
                item.ProductId = item.Product.Id;
            }

            for (var position = 0; position < patchedItems.Count; position++)
            {
                var item = patchedItems[position];

                _db.PointOfSaleProducts.Add(new PointOfSaleProduct()
                {
                    PointOfSaleId = item.PointOfSaleId,
                    ProductId = item.Product.Id,
                    Position = position,
                    Presale = item.Presale,
                    IsServing = item.IsServing
                });
            }

            await _db.SaveChangesAsync();

            return patchedItems;
        }
    }
}
