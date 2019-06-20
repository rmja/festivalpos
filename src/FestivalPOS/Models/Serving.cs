using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace FestivalPOS.Models
{
    public class Serving
    {
        public int Id { get; private set; }
        public int OrderId { get; set; }
        [JsonIgnore]
        public Order Order { get; private set; }
        public int PointOfSaleId { get; set; }
        [JsonIgnore]
        public PointOfSale PointOfSale { get; set; }
        public ServingState State { get; set; }
        public bool HighPriority { get; set; }
        public int? TagNumber { get; set; }
        public DateTimeOffset Created { get; set; }
        public int? StaffNumber { get; set; }
        public DateTimeOffset? Accepted { get; set; }
        public DateTimeOffset? Completed { get; set; }
        public List<ServingLine> Lines { get; set; } = new List<ServingLine>();

        public void OnMaterialized()
        {
            Lines.Sort((a, b) => a.Position.CompareTo(b.Position));
        }
    }

    public enum ServingState
    {
        Pending = 1,
        Ongoing = 2,
        Completed = 3
    }
}
