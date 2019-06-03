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

            var productStats = await connection.QueryAsync<ProductStats>(
                sql: await SqlScript.GetAsync("GetHourlyProductStats.sql"),
                param: param);

            foreach (var order in orderStats)
            {
                order.Payments = paymentStats.Where(x => x.PeriodStart == order.PeriodStart).ToList();
                order.Products = productStats.Where(x => x.PeriodStart == order.PeriodStart).ToList();
            }

            return orderStats.AsList();
        }
    }
}
