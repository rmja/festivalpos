﻿using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace FestivalPOS.Models
{
    public class Terminal
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(100)]
        public string Name { get; set; }
        public bool IsDeleted { get; set; }
        public ICollection<Printer> Printers { get; set; }
    }
}
