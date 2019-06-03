﻿// <auto-generated />
using System;
using FestivalPOS;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace FestivalPOS.Migrations
{
    [DbContext(typeof(PosContext))]
    [Migration("20190504073852_FixAlarmFeedNameDatatype")]
    partial class FixAlarmFeedNameDatatype
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.4-servicing-10062")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("KajfestPOS.Models.AlarmEvent", b =>
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

            modelBuilder.Entity("KajfestPOS.Models.AlarmFeed", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<string>("SubscriberEmail");

                    b.HasKey("Id");

                    b.ToTable("AlarmFeeds");
                });

            modelBuilder.Entity("KajfestPOS.Models.Order", b =>
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

            modelBuilder.Entity("KajfestPOS.Models.OrderLine", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .HasMaxLength(100);

                    b.Property<string>("Note")
                        .HasMaxLength(100);

                    b.Property<int>("OrderId");

                    b.Property<int>("Position");

                    b.Property<int?>("ProductId");

                    b.Property<int>("Quantity");

                    b.Property<decimal>("Total")
                        .HasColumnType("decimal(9,2)");

                    b.HasKey("Id");

                    b.HasIndex("OrderId");

                    b.HasIndex("ProductId");

                    b.ToTable("OrderLines");
                });

            modelBuilder.Entity("KajfestPOS.Models.Payment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<decimal>("Amount")
                        .HasColumnType("decimal(9,2)");

                    b.Property<DateTimeOffset>("Created");

                    b.Property<int>("Method");

                    b.Property<int>("OrderId");

                    b.HasKey("Id");

                    b.HasIndex("OrderId");

                    b.ToTable("Payments");
                });

            modelBuilder.Entity("KajfestPOS.Models.PointOfSale", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.HasKey("Id");

                    b.ToTable("PointOfSales");
                });

            modelBuilder.Entity("KajfestPOS.Models.PointOfSaleProduct", b =>
                {
                    b.Property<int>("PointOfSaleId");

                    b.Property<int>("ProductId");

                    b.Property<int>("Position");

                    b.HasKey("PointOfSaleId", "ProductId");

                    b.HasIndex("ProductId");

                    b.ToTable("PointOfSaleProducts");
                });

            modelBuilder.Entity("KajfestPOS.Models.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("IsDeleted");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(9,2)");

                    b.HasKey("Id");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("KajfestPOS.Models.Terminal", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.HasKey("Id");

                    b.ToTable("Terminals");
                });

            modelBuilder.Entity("KajfestPOS.Models.AlarmEvent", b =>
                {
                    b.HasOne("KajfestPOS.Models.AlarmFeed", "AlarmFeed")
                        .WithMany("Events")
                        .HasForeignKey("AlarmFeedId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("KajfestPOS.Models.PointOfSale", "PointOfSale")
                        .WithMany()
                        .HasForeignKey("PointOfSaleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("KajfestPOS.Models.Terminal", "Terminal")
                        .WithMany()
                        .HasForeignKey("TerminalId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("KajfestPOS.Models.Order", b =>
                {
                    b.HasOne("KajfestPOS.Models.PointOfSale", "PointOfSale")
                        .WithMany()
                        .HasForeignKey("PointOfSaleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("KajfestPOS.Models.Terminal", "Terminal")
                        .WithMany()
                        .HasForeignKey("TerminalId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("KajfestPOS.Models.OrderLine", b =>
                {
                    b.HasOne("KajfestPOS.Models.Order", "Order")
                        .WithMany("Lines")
                        .HasForeignKey("OrderId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("KajfestPOS.Models.Product", "Product")
                        .WithMany()
                        .HasForeignKey("ProductId");
                });

            modelBuilder.Entity("KajfestPOS.Models.Payment", b =>
                {
                    b.HasOne("KajfestPOS.Models.Order", "Order")
                        .WithMany("Payments")
                        .HasForeignKey("OrderId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("KajfestPOS.Models.PointOfSaleProduct", b =>
                {
                    b.HasOne("KajfestPOS.Models.PointOfSale", "PointOfSale")
                        .WithMany()
                        .HasForeignKey("PointOfSaleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("KajfestPOS.Models.Product", "Product")
                        .WithMany()
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
