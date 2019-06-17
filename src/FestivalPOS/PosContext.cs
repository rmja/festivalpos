using FestivalPOS.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace FestivalPOS
{
    public class PosContext : DbContext
    {
        private readonly PosOptions _options;

        public DbSet<Account> Accounts { get; set; }
        public DbSet<AlarmEvent> AlarmEvents { get; set; }
        public DbSet<AlarmFeed> AlarmFeeds { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderLine> OrderLines { get; set; }
        public DbSet<OrderTag> OrderTags { get; set; }
        public DbSet<Payment> Payments { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<PointOfSale> PointOfSales { get; set; }
        public DbSet<PointOfSaleProduct> PointOfSaleProducts { get; set; }
        public DbSet<Printer> Printers { get; set; }
        public DbSet<Serving> Servings { get; set; }
        public DbSet<ServingLine> ServingLines { get; set; }
        public DbSet<Terminal> Terminals { get; set; }

        public PosContext(IOptions<PosOptions> options)
        {
            _options = options.Value;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);

            optionsBuilder.UseSqlServer(_options.SqlServerConnectionString);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Account>().HasQueryFilter(x => !x.IsDeleted);
            modelBuilder.Entity<Account>().Property(x => x.MaxCredit).HasColumnType("decimal(9,2)");
            modelBuilder.Entity<Account>().Property(x => x.RemainingCredit).HasColumnType("decimal(9,2)");
            modelBuilder.Entity<Account>().HasIndex(x => x.Number).IsUnique().HasFilter("IsDeleted = 0");

            modelBuilder.Entity<AlarmFeed>().HasQueryFilter(x => !x.IsDeleted);

            modelBuilder.Entity<Order>().HasIndex(x => x.AmountDue);
            modelBuilder.Entity<OrderLine>().Property(x => x.Total).HasColumnType("decimal(9,2)");
            modelBuilder.Entity<Payment>().Property(x => x.Amount).HasColumnType("decimal(9,2)");
            modelBuilder.Entity<Order>().HasMany(x => x.Tags).WithOne(x => x.Order).OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<OrderTag>().HasIndex(x => x.Number).HasFilter("Detached IS NULL");
            modelBuilder.Entity<OrderTag>().HasIndex(x => new { x.Number, x.OrderId }).HasFilter("Detached IS NULL").IsUnique();

            modelBuilder.Entity<PointOfSale>().HasQueryFilter(x => !x.IsDeleted);
            modelBuilder.Entity<PointOfSale>().HasOne(x => x.ReceiptPrinter).WithMany().OnDelete(DeleteBehavior.SetNull);
            modelBuilder.Entity<PointOfSaleProduct>().HasKey(x => new { x.PointOfSaleId, x.ProductId });

            modelBuilder.Entity<Printer>().HasOne(x => x.Terminal).WithMany(x => x.Printers).OnDelete(DeleteBehavior.SetNull);

            modelBuilder.Entity<Product>().Property(x => x.Price).HasColumnType("decimal(9,2)");
            modelBuilder.Entity<Product>().HasQueryFilter(x => !x.IsDeleted);

            modelBuilder.Entity<Terminal>().HasQueryFilter(x => !x.IsDeleted);

            modelBuilder.Entity<Serving>().HasOne(x => x.PointOfSale).WithMany().OnDelete(DeleteBehavior.Restrict);
            modelBuilder.Entity<ServingLine>().HasOne(x => x.OrderLine).WithMany().OnDelete(DeleteBehavior.Restrict);
        }
    }
}
