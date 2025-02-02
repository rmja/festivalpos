﻿namespace FestivalPOS.Models;

public class OrderTag
{
    public int Id { get; set; }
    public int OrderId { get; set; }
    public Order Order { get; set; } = null!;
    public int Number { get; set; }
    public DateTimeOffset Attached { get; set; }
    public DateTimeOffset? Detached { get; set; }
}
