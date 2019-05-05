using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KajfestPOS.Models;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace KajfestPOS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly PosContext _db;

        public ProductsController(PosContext db)
        {
            _db = db;
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

        [HttpDelete("{id}")]
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
        public Task<List<Product>> GetProductsByPointOfSaleId(int pointOfSaleId)
        {
            return _db.PointOfSaleProducts
                .Where(x => x.PointOfSaleId == pointOfSaleId)
                .OrderBy(x => x.Position)
                .Select(x => x.Product)
                .ToListAsync();
        }

        [HttpPatch("/api/PointOfSales/{pointOfSaleId:int}/Products")]
        public async Task<List<Product>> UpdateProductsByPointOfSaleId(int pointOfSaleId, JsonPatchDocument<IList<Product>> patch)
        {
            var items = await _db.PointOfSaleProducts.Where(x => x.PointOfSaleId == pointOfSaleId).OrderBy(x => x.Position).Include(x => x.Product).ToListAsync();
            var products = items.Select(x => x.Product).ToList();

            patch.ApplyTo(products);

            _db.Products.AddRange(products.Where(x => x.Id == default));
            _db.PointOfSaleProducts.RemoveRange(items);

            for (var position = 0; position < products.Count; position++)
            {
                var product = products[position];

                _db.PointOfSaleProducts.Add(new PointOfSaleProduct()
                {
                    PointOfSaleId = pointOfSaleId,
                    ProductId = product.Id,
                    Position = position
                });
            }

            await _db.SaveChangesAsync();

            return products;

        }
    }
}
