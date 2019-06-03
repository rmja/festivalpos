﻿namespace FestivalPOS.Models
{
    public class PointOfSaleProduct
    {
        public int PointOfSaleId { get; set; }
        public PointOfSale PointOfSale { get; set; }
        public int ProductId { get; set; }
        public Product Product { get; set; }
        public int Position { get; set; }
        public bool Presale { get; set; }
    }
}
