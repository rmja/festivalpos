using Dapper;
using FestivalPOS.Models;
using FestivalPOS.Sql;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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

        [HttpGet("Hourly")]
        public async Task<List<OrderStats>> GetHourlyStats(int year, int? terminalId, int? pointOfSaleId)
        {
            var connection = _db.Database.GetDbConnection();

            var param = new
            {
                year,
                terminalId,
                pointOfSaleId
            };

            var orderStats = await connection.QueryAsync<OrderStats>(
                sql: await SqlScript.GetAsync("GetHourlyOrderStats.sql"),
                param: param);

            var paymentStats = await connection.QueryAsync<PaymentStats>(
                sql: await SqlScript.GetAsync("GetHourlyPaymentStats.sql"),
                param: param);

            var productSaleStats = await connection.QueryAsync<ProductSaleStats>(
                sql: await SqlScript.GetAsync("GetHourlyProductSaleStats.sql"),
                param: param);

            var productServingStats = await connection.QueryAsync<ProductServingStats>(
                sql: await SqlScript.GetAsync("GetHourlyProductServingStats.sql"),
                param: param);

            var periodStarts = orderStats.Select(x => x.PeriodStart)
                .Union(productServingStats.Select(x => x.PeriodStart))
                .OrderBy(x => x)
                .ToList();

            var result = new List<OrderStats>(periodStarts.Count);

            foreach (var periodStart in periodStarts)
            {
                var order = orderStats.FirstOrDefault(x => x.PeriodStart == periodStart) ?? new OrderStats() { PeriodStart = periodStart };

                order.Payments = paymentStats.Where(x => x.PeriodStart == order.PeriodStart).ToList();
                order.ProductSales = productSaleStats.Where(x => x.PeriodStart == order.PeriodStart).ToList();
                order.ProductServings = productServingStats.Where(x => x.PeriodStart == order.PeriodStart).ToList();

                result.Add(order);
            }

            return result;
        }
    }
}
