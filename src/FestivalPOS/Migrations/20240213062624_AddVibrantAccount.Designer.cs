﻿// <auto-generated />
using System;
using FestivalPOS;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace FestivalPOS.Migrations
{
    [DbContext(typeof(PosContext))]
    [Migration("20240213062624_AddVibrantAccount")]
    partial class AddVibrantAccount
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("FestivalPOS.Models.Account", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<bool>("HighPriorityServing")
                        .HasColumnType("bit");

                    b.Property<bool>("IsDeleted")
                        .HasColumnType("bit");

                    b.Property<decimal>("MaxCredit")
                        .HasColumnType("decimal(9,2)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<int>("Number")
                        .HasColumnType("int");

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
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("AlarmFeedId")
                        .HasColumnType("int");

                    b.Property<DateTimeOffset?>("Cancelled")
                        .HasColumnType("datetimeoffset");

                    b.Property<DateTimeOffset>("Created")
                        .HasColumnType("datetimeoffset");

                    b.Property<int>("PointOfSaleId")
                        .HasColumnType("int");

                    b.Property<int>("TerminalId")
                        .HasColumnType("int");

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
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<bool>("IsDeleted")
                        .HasColumnType("bit");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("SubscriberEmail")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("AlarmFeeds");
                });

            modelBuilder.Entity("FestivalPOS.Models.Order", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<decimal>("AmountDue")
                        .HasColumnType("decimal(18,2)");

                    b.Property<DateTimeOffset>("Created")
                        .HasColumnType("datetimeoffset");

                    b.Property<bool>("IsDeleted")
                        .HasColumnType("bit");

                    b.Property<int>("PointOfSaleId")
                        .HasColumnType("int");

                    b.Property<int>("TerminalId")
                        .HasColumnType("int");

                    b.Property<decimal>("Total")
                        .HasColumnType("decimal(18,2)");

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
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<bool>("IsServing")
                        .HasColumnType("bit");

                    b.Property<string>("Name")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Note")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<int>("OrderId")
                        .HasColumnType("int");

                    b.Property<int>("Position")
                        .HasColumnType("int");

                    b.Property<int?>("ProductId")
                        .HasColumnType("int");

                    b.Property<int>("Quantity")
                        .HasColumnType("int");

                    b.Property<int>("Receiveable")
                        .HasColumnType("int");

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
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTimeOffset>("Attached")
                        .HasColumnType("datetimeoffset");

                    b.Property<DateTimeOffset?>("Detached")
                        .HasColumnType("datetimeoffset");

                    b.Property<int>("Number")
                        .HasColumnType("int");

                    b.Property<int>("OrderId")
                        .HasColumnType("int");

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
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int?>("AccountId")
                        .HasColumnType("int");

                    b.Property<decimal>("Amount")
                        .HasColumnType("decimal(9,2)");

                    b.Property<DateTimeOffset>("Created")
                        .HasColumnType("datetimeoffset");

                    b.Property<int>("Method")
                        .HasColumnType("int");

                    b.Property<int?>("OrderId")
                        .HasColumnType("int");

                    b.Property<string>("TransactionNumber")
                        .HasMaxLength(20)
                        .HasColumnType("nvarchar(20)");

                    b.HasKey("Id");

                    b.HasIndex("AccountId");

                    b.HasIndex("OrderId");

                    b.ToTable("Payments");
                });

            modelBuilder.Entity("FestivalPOS.Models.PointOfSale", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<bool>("IsDeleted")
                        .HasColumnType("bit");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<int?>("ReceiptPrinterId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("ReceiptPrinterId");

                    b.ToTable("PointOfSales");
                });

            modelBuilder.Entity("FestivalPOS.Models.PointOfSaleProduct", b =>
                {
                    b.Property<int>("PointOfSaleId")
                        .HasColumnType("int");

                    b.Property<int>("ProductId")
                        .HasColumnType("int");

                    b.Property<bool>("IsServing")
                        .HasColumnType("bit");

                    b.Property<int>("Position")
                        .HasColumnType("int");

                    b.Property<bool>("Presale")
                        .HasColumnType("bit");

                    b.HasKey("PointOfSaleId", "ProductId");

                    b.HasIndex("ProductId");

                    b.ToTable("PointOfSaleProducts");
                });

            modelBuilder.Entity("FestivalPOS.Models.Printer", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("BluetoothMacAddress")
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("RestPrintPrinterName")
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<int>("TerminalId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("TerminalId");

                    b.ToTable("Printers");
                });

            modelBuilder.Entity("FestivalPOS.Models.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<bool>("IsDeleted")
                        .HasColumnType("bit");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("PreviewImageName")
                        .HasMaxLength(300)
                        .HasColumnType("nvarchar(300)");

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(9,2)");

                    b.Property<string>("ThumbnailImageName")
                        .HasMaxLength(300)
                        .HasColumnType("nvarchar(300)");

                    b.HasKey("Id");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("FestivalPOS.Models.Serving", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTimeOffset?>("Accepted")
                        .HasColumnType("datetimeoffset");

                    b.Property<DateTimeOffset?>("Completed")
                        .HasColumnType("datetimeoffset");

                    b.Property<DateTimeOffset>("Created")
                        .HasColumnType("datetimeoffset");

                    b.Property<bool>("HighPriority")
                        .HasColumnType("bit");

                    b.Property<int>("OrderId")
                        .HasColumnType("int");

                    b.Property<int>("PointOfSaleId")
                        .HasColumnType("int");

                    b.Property<int?>("StaffNumber")
                        .HasColumnType("int");

                    b.Property<int>("State")
                        .HasColumnType("int");

                    b.Property<int?>("TagNumber")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("OrderId");

                    b.HasIndex("PointOfSaleId");

                    b.ToTable("Servings");
                });

            modelBuilder.Entity("FestivalPOS.Models.ServingLine", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<int>("OrderLineId")
                        .HasColumnType("int");

                    b.Property<int>("Position")
                        .HasColumnType("int");

                    b.Property<int>("Quantity")
                        .HasColumnType("int");

                    b.Property<int>("ServingId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("OrderLineId");

                    b.HasIndex("ServingId");

                    b.ToTable("ServingLines");
                });

            modelBuilder.Entity("FestivalPOS.Models.ServingStaff", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Number")
                        .HasColumnType("int");

                    b.Property<int>("PointOfSaleId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("PointOfSaleId");

                    b.ToTable("ServingStaff");
                });

            modelBuilder.Entity("FestivalPOS.Models.SumUpAffiliate", b =>
                {
                    b.Property<string>("Key")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Name")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("Key");

                    b.ToTable("SumUpAffiliates");
                });

            modelBuilder.Entity("FestivalPOS.Models.Terminal", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<bool>("IsDeleted")
                        .HasColumnType("bit");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("Id");

                    b.ToTable("Terminals");
                });

            modelBuilder.Entity("FestivalPOS.Models.VibrantAccount", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ApiKey")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Sandbox")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.ToTable("VibrantAccounts");
                });

            modelBuilder.Entity("FestivalPOS.Models.AlarmEvent", b =>
                {
                    b.HasOne("FestivalPOS.Models.AlarmFeed", "AlarmFeed")
                        .WithMany("Events")
                        .HasForeignKey("AlarmFeedId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("FestivalPOS.Models.PointOfSale", "PointOfSale")
                        .WithMany()
                        .HasForeignKey("PointOfSaleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("FestivalPOS.Models.Terminal", "Terminal")
                        .WithMany()
                        .HasForeignKey("TerminalId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("AlarmFeed");

                    b.Navigation("PointOfSale");

                    b.Navigation("Terminal");
                });

            modelBuilder.Entity("FestivalPOS.Models.Order", b =>
                {
                    b.HasOne("FestivalPOS.Models.PointOfSale", "PointOfSale")
                        .WithMany()
                        .HasForeignKey("PointOfSaleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("FestivalPOS.Models.Terminal", "Terminal")
                        .WithMany()
                        .HasForeignKey("TerminalId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("PointOfSale");

                    b.Navigation("Terminal");
                });

            modelBuilder.Entity("FestivalPOS.Models.OrderLine", b =>
                {
                    b.HasOne("FestivalPOS.Models.Order", "Order")
                        .WithMany("Lines")
                        .HasForeignKey("OrderId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("FestivalPOS.Models.Product", "Product")
                        .WithMany()
                        .HasForeignKey("ProductId");

                    b.Navigation("Order");

                    b.Navigation("Product");
                });

            modelBuilder.Entity("FestivalPOS.Models.OrderTag", b =>
                {
                    b.HasOne("FestivalPOS.Models.Order", "Order")
                        .WithMany("Tags")
                        .HasForeignKey("OrderId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Order");
                });

            modelBuilder.Entity("FestivalPOS.Models.Payment", b =>
                {
                    b.HasOne("FestivalPOS.Models.Account", "Account")
                        .WithMany("Payments")
                        .HasForeignKey("AccountId");

                    b.HasOne("FestivalPOS.Models.Order", "Order")
                        .WithMany("Payments")
                        .HasForeignKey("OrderId");

                    b.Navigation("Account");

                    b.Navigation("Order");
                });

            modelBuilder.Entity("FestivalPOS.Models.PointOfSale", b =>
                {
                    b.HasOne("FestivalPOS.Models.Printer", "ReceiptPrinter")
                        .WithMany()
                        .HasForeignKey("ReceiptPrinterId")
                        .OnDelete(DeleteBehavior.SetNull);

                    b.Navigation("ReceiptPrinter");
                });

            modelBuilder.Entity("FestivalPOS.Models.PointOfSaleProduct", b =>
                {
                    b.HasOne("FestivalPOS.Models.PointOfSale", "PointOfSale")
                        .WithMany()
                        .HasForeignKey("PointOfSaleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("FestivalPOS.Models.Product", "Product")
                        .WithMany()
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("PointOfSale");

                    b.Navigation("Product");
                });

            modelBuilder.Entity("FestivalPOS.Models.Printer", b =>
                {
                    b.HasOne("FestivalPOS.Models.Terminal", "Terminal")
                        .WithMany("Printers")
                        .HasForeignKey("TerminalId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("Terminal");
                });

            modelBuilder.Entity("FestivalPOS.Models.Serving", b =>
                {
                    b.HasOne("FestivalPOS.Models.Order", "Order")
                        .WithMany("Servings")
                        .HasForeignKey("OrderId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("FestivalPOS.Models.PointOfSale", "PointOfSale")
                        .WithMany()
                        .HasForeignKey("PointOfSaleId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("Order");

                    b.Navigation("PointOfSale");
                });

            modelBuilder.Entity("FestivalPOS.Models.ServingLine", b =>
                {
                    b.HasOne("FestivalPOS.Models.OrderLine", "OrderLine")
                        .WithMany()
                        .HasForeignKey("OrderLineId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("FestivalPOS.Models.Serving", "Serving")
                        .WithMany("Lines")
                        .HasForeignKey("ServingId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("OrderLine");

                    b.Navigation("Serving");
                });

            modelBuilder.Entity("FestivalPOS.Models.ServingStaff", b =>
                {
                    b.HasOne("FestivalPOS.Models.PointOfSale", null)
                        .WithMany("ServingStaff")
                        .HasForeignKey("PointOfSaleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("FestivalPOS.Models.Account", b =>
                {
                    b.Navigation("Payments");
                });

            modelBuilder.Entity("FestivalPOS.Models.AlarmFeed", b =>
                {
                    b.Navigation("Events");
                });

            modelBuilder.Entity("FestivalPOS.Models.Order", b =>
                {
                    b.Navigation("Lines");

                    b.Navigation("Payments");

                    b.Navigation("Servings");

                    b.Navigation("Tags");
                });

            modelBuilder.Entity("FestivalPOS.Models.PointOfSale", b =>
                {
                    b.Navigation("ServingStaff");
                });

            modelBuilder.Entity("FestivalPOS.Models.Serving", b =>
                {
                    b.Navigation("Lines");
                });

            modelBuilder.Entity("FestivalPOS.Models.Terminal", b =>
                {
                    b.Navigation("Printers");
                });
#pragma warning restore 612, 618
        }
    }
}
