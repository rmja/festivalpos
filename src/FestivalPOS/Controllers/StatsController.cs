using Dapper;
using FestivalPOS.Models;
using FestivalPOS.Sql;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FestivalPOS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StatsController
    {
        private readonly PosContext _db;

        public StatsController(PosContext db)
        {
            _db = db;
        }

        [HttpGet("{periodStart}/{periodEnd}/{kind}")]
        [HttpGet("{periodStart}/{periodEnd}/{kind}-{offset}")]
        public async Task<List<OrderStats>> GetHourlyStats(
            DateTimeOffset periodStart,
            DateTimeOffset periodEnd,
            StatsKind kind,
            TimeSpan offset,
            int? terminalId,
            int? pointOfSaleId
        )
        {
            var connection = _db.Database.GetDbConnection();

            var param = new
            {
                periodStart,
                periodEnd,
                kind,
                terminalId,
                pointOfSaleId,
                hourOffset = -(int)offset.TotalHours
            };

            var orderStats = await connection.QueryAsync<OrderStats>(
                sql: await SqlScript.GetAsync("GetOrderStats.sql"),
                param: param
            );

            var paymentStats = await connection.QueryAsync<PaymentStats>(
                sql: await SqlScript.GetAsync("GetPaymentStats.sql"),
                param: param
            );

            var productSaleStats = await connection.QueryAsync<ProductSaleStats>(
                sql: await SqlScript.GetAsync("GetProductSaleStats.sql"),
                param: param
            );

            var productServingStats = await connection.QueryAsync<ProductServingStats>(
                sql: await SqlScript.GetAsync("GetProductServingStats.sql"),
                param: param
            );

            var periodStarts = orderStats
                .Select(x => x.PeriodStart)
                .Union(productServingStats.Select(x => x.PeriodStart))
                .OrderBy(x => x)
                .ToList();

            var result = new List<OrderStats>(periodStarts.Count);

            foreach (var startOfPeriod in periodStarts)
            {
                var order =
                    orderStats.FirstOrDefault(x => x.PeriodStart == startOfPeriod)
                    ?? new OrderStats() { PeriodStart = startOfPeriod };

                var productStats = new Dictionary<int, ProductStats>();

                foreach (
                    var sale in productSaleStats.Where(x => x.PeriodStart == order.PeriodStart)
                )
                {
                    var stats = new ProductStats()
                    {
                        ProductId = sale.ProductId,
                        ProductName = sale.ProductName,
                        OrderCount = sale.OrderCount,
                        SaleQuantity = sale.ProductQuantity,
                        SaleTotal = sale.Total,
                    };

                    productStats.Add(sale.ProductId, stats);
                }

                foreach (
                    var serving in productServingStats.Where(
                        x => x.PeriodStart == order.PeriodStart
                    )
                )
                {
                    if (!productStats.TryGetValue(serving.ProductId, out var stats))
                    {
                        stats = productStats[serving.ProductId] = new ProductStats()
                        {
                            ProductId = serving.ProductId,
                            ProductName = serving.ProductName
                        };
                    }

                    stats.ServingCount = serving.ServingCount;
                    stats.ServingQuantity = serving.ProductQuantity;
                }

                order.Payments = paymentStats
                    .Where(x => x.PeriodStart == order.PeriodStart)
                    .ToList();
                order.Products = productStats.Values.OrderBy(x => x.ProductName).ToList();

                result.Add(order);
            }

            return result;
        }

        public class ProductSaleStats
        {
            internal StatsKind Kind { get; set; }
            internal DateTimeOffset EarliestOrderCreated { get; set; }
            internal DateTimeOffset PeriodStart => EarliestOrderCreated.StartOf(Kind);
            public int ProductId { get; set; }
            public string ProductName { get; set; }
            public int ProductQuantity { get; set; }
            public int OrderCount { get; set; }
            public decimal Total { get; set; }
        }

        public class ProductServingStats
        {
            internal StatsKind Kind { get; set; }
            internal DateTimeOffset EarliestServingCreated { get; set; }
            internal DateTimeOffset PeriodStart => EarliestServingCreated.StartOf(Kind);
            public int ProductId { get; set; }
            public string ProductName { get; set; }
            public int ProductQuantity { get; set; }
            public int ServingCount { get; set; }
        }
    }
}
