﻿// <auto-generated />
using System;
using FestivalPOS;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace FestivalPOS.Migrations
{
    [DbContext(typeof(PosContext))]
    partial class PosContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.4-servicing-10062")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("FestivalPOS.Models.Account", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("HighPriorityServing");

                    b.Property<bool>("IsDeleted");

                    b.Property<decimal>("MaxCredit")
                        .HasColumnType("decimal(9,2)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<int>("Number");

                    b.Property<decimal>("RemainingCredit")
                        .HasColumnType("decimal(9,2)");

                    b.HasKey("Id");

                    b.HasIndex("Number")
                        .IsUnique()
                        .HasFilter("IsDeleted = 0");

                    b.ToTable("Accounts");
                });

            modelBuilder.Entity("FestivalPOS.Models.AlarmEvent", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("AlarmFeedId");

                    b.Property<DateTimeOffset?>("Cancelled");

                    b.Property<DateTimeOffset>("Created");

                    b.Property<int>("PointOfSaleId");

                    b.Property<int>("TerminalId");

                    b.HasKey("Id");

                    b.HasIndex("AlarmFeedId");

                    b.HasIndex("PointOfSaleId");

                    b.HasIndex("TerminalId");

                    b.ToTable("AlarmEvents");
                });

            modelBuilder.Entity("FestivalPOS.Models.AlarmFeed", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("IsDeleted");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<string>("SubscriberEmail");

                    b.HasKey("Id");

                    b.ToTable("AlarmFeeds");
                });

            modelBuilder.Entity("FestivalPOS.Models.Order", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<decimal>("AmountDue");

                    b.Property<DateTimeOffset>("Created");

                    b.Property<int>("PointOfSaleId");

                    b.Property<int>("TerminalId");

                    b.Property<decimal>("Total");

                    b.HasKey("Id");

                    b.HasIndex("AmountDue");

                    b.HasIndex("PointOfSaleId");

                    b.HasIndex("TerminalId");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("FestivalPOS.Models.OrderLine", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("IsServing");

                    b.Property<string>("Name")
                        .HasMaxLength(100);

                    b.Property<string>("Note")
                        .HasMaxLength(100);

                    b.Property<int>("OrderId");

                    b.Property<int>("Position");

                    b.Property<int?>("ProductId");

                    b.Property<int>("Quantity");

                    b.Property<int>("Receiveable");

                    b.Property<decimal>("Total")
                        .HasColumnType("decimal(9,2)");

                    b.HasKey("Id");

                    b.HasIndex("OrderId");

                    b.HasIndex("ProductId");

                    b.ToTable("OrderLines");
                });

            modelBuilder.Entity("FestivalPOS.Models.OrderTag", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTimeOffset>("Attached");

                    b.Property<DateTimeOffset?>("Detached");

                    b.Property<int>("Number");

                    b.Property<int>("OrderId");

                    b.HasKey("Id");

                    b.HasIndex("Number")
                        .HasFilter("Detached IS NULL");

                    b.HasIndex("OrderId");

                    b.HasIndex("Number", "OrderId")
                        .IsUnique()
                        .HasFilter("Detached IS NULL");

                    b.ToTable("OrderTags");
                });

            modelBuilder.Entity("FestivalPOS.Models.Payment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("AccountId");

                    b.Property<decimal>("Amount")
                        .HasColumnType("decimal(9,2)");

                    b.Property<DateTimeOffset>("Created");

                    b.Property<int>("Method");

                    b.Property<int?>("OrderId");

                    b.Property<string>("TransactionNumber")
                        .HasMaxLength(10);

                    b.HasKey("Id");

                    b.HasIndex("AccountId");

                    b.HasIndex("OrderId");

                    b.ToTable("Payments");
                });

            modelBuilder.Entity("FestivalPOS.Models.PointOfSale", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("IsDeleted");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<int>("NoOfServingStaff");

                    b.Property<int?>("ReceiptPrinterId");

                    b.HasKey("Id");

                    b.HasIndex("ReceiptPrinterId");

                    b.ToTable("PointOfSales");
                });

            modelBuilder.Entity("FestivalPOS.Models.PointOfSaleProduct", b =>
                {
                    b.Property<int>("PointOfSaleId");

                    b.Property<int>("ProductId");

                    b.Property<int>("Position");

                    b.Property<bool>("Presale");

                    b.HasKey("PointOfSaleId", "ProductId");

                    b.HasIndex("ProductId");

                    b.ToTable("PointOfSaleProducts");
                });

            modelBuilder.Entity("FestivalPOS.Models.Printer", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("BluetoothMacAddress")
                        .HasMaxLength(50);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<string>("RestPrintPrinterName")
                        .HasMaxLength(50);

                    b.Property<int>("TerminalId");

                    b.HasKey("Id");

                    b.HasIndex("TerminalId");

                    b.ToTable("Printers");
                });

            modelBuilder.Entity("FestivalPOS.Models.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("IsDeleted");

                    b.Property<bool>("IsServing");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<string>("PreviewImageUrl")
                        .HasMaxLength(300);

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(9,2)");

                    b.Property<string>("ThumbnailImageUrl")
                        .HasMaxLength(300);

                    b.HasKey("Id");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("FestivalPOS.Models.Serving", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTimeOffset?>("Accepted");

                    b.Property<DateTimeOffset?>("Completed");

                    b.Property<DateTimeOffset>("Created");

                    b.Property<bool>("HighPriority");

                    b.Property<int>("OrderId");

                    b.Property<int>("PointOfSaleId");

                    b.Property<int?>("StaffNumber");

                    b.Property<int>("State");

                    b.Property<int?>("TagNumber");

                    b.HasKey("Id");

                    b.HasIndex("OrderId");

                    b.HasIndex("PointOfSaleId");

                    b.ToTable("Servings");
                });

            modelBuilder.Entity("FestivalPOS.Models.ServingLine", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .HasMaxLength(100);

                    b.Property<int>("OrderLineId");

                    b.Property<int>("Position");

                    b.Property<int>("Quantity");

                    b.Property<int>("ServingId");

                    b.HasKey("Id");

                    b.HasIndex("OrderLineId");

                    b.HasIndex("ServingId");

                    b.ToTable("ServingLines");
                });

            modelBuilder.Entity("FestivalPOS.Models.SumUpAffiliate", b =>
                {
                    b.Property<string>("Key")
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(100);

                    b.Property<string>("Name")
                        .HasMaxLength(100);

                    b.HasKey("Key");

                    b.ToTable("SumUpAffiliates");
                });

            modelBuilder.Entity("FestivalPOS.Models.Terminal", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("IsDeleted");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.HasKey("Id");

                    b.ToTable("Terminals");
                });

            modelBuilder.Entity("FestivalPOS.Models.AlarmEvent", b =>
                {
                    b.HasOne("FestivalPOS.Models.AlarmFeed", "AlarmFeed")
                        .WithMany("Events")
                        .HasForeignKey("AlarmFeedId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("FestivalPOS.Models.PointOfSale", "PointOfSale")
                        .WithMany()
                        .HasForeignKey("PointOfSaleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("FestivalPOS.Models.Terminal", "Terminal")
                        .WithMany()
                        .HasForeignKey("TerminalId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("FestivalPOS.Models.Order", b =>
                {
                    b.HasOne("FestivalPOS.Models.PointOfSale", "PointOfSale")
                        .WithMany()
                        .HasForeignKey("PointOfSaleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("FestivalPOS.Models.Terminal", "Terminal")
                        .WithMany()
                        .HasForeignKey("TerminalId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("FestivalPOS.Models.OrderLine", b =>
                {
                    b.HasOne("FestivalPOS.Models.Order", "Order")
                        .WithMany("Lines")
                        .HasForeignKey("OrderId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("FestivalPOS.Models.Product", "Product")
                        .WithMany()
                        .HasForeignKey("ProductId");
                });

            modelBuilder.Entity("FestivalPOS.Models.OrderTag", b =>
                {
                    b.HasOne("FestivalPOS.Models.Order", "Order")
                        .WithMany("Tags")
                        .HasForeignKey("OrderId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("FestivalPOS.Models.Payment", b =>
                {
                    b.HasOne("FestivalPOS.Models.Account", "Account")
                        .WithMany("Payments")
                        .HasForeignKey("AccountId");

                    b.HasOne("FestivalPOS.Models.Order", "Order")
                        .WithMany("Payments")
                        .HasForeignKey("OrderId");
                });

            modelBuilder.Entity("FestivalPOS.Models.PointOfSale", b =>
                {
                    b.HasOne("FestivalPOS.Models.Printer", "ReceiptPrinter")
                        .WithMany()
                        .HasForeignKey("ReceiptPrinterId")
                        .OnDelete(DeleteBehavior.SetNull);
                });

            modelBuilder.Entity("FestivalPOS.Models.PointOfSaleProduct", b =>
                {
                    b.HasOne("FestivalPOS.Models.PointOfSale", "PointOfSale")
                        .WithMany()
                        .HasForeignKey("PointOfSaleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("FestivalPOS.Models.Product", "Product")
                        .WithMany()
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("FestivalPOS.Models.Printer", b =>
                {
                    b.HasOne("FestivalPOS.Models.Terminal", "Terminal")
                        .WithMany("Printers")
                        .HasForeignKey("TerminalId")
                        .OnDelete(DeleteBehavior.SetNull);
                });

            modelBuilder.Entity("FestivalPOS.Models.Serving", b =>
                {
                    b.HasOne("FestivalPOS.Models.Order", "Order")
                        .WithMany("Servings")
                        .HasForeignKey("OrderId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("FestivalPOS.Models.PointOfSale", "PointOfSale")
                        .WithMany()
                        .HasForeignKey("PointOfSaleId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("FestivalPOS.Models.ServingLine", b =>
                {
                    b.HasOne("FestivalPOS.Models.OrderLine", "OrderLine")
                        .WithMany()
                        .HasForeignKey("OrderLineId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("FestivalPOS.Models.Serving", "Serving")
                        .WithMany("Lines")
                        .HasForeignKey("ServingId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
