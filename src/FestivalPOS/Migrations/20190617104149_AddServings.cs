using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FestivalPOS.Migrations;

public partial class AddServings : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropForeignKey(
            name: "FK_PointOfSales_Printers_ReceiptPrinterId",
            table: "PointOfSales");

        migrationBuilder.CreateTable(
            name: "Servings",
            columns: table => new
            {
                Id = table.Column<int>(nullable: false)
                    .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                OrderId = table.Column<int>(nullable: false),
                PointOfSaleId = table.Column<int>(nullable: false),
                State = table.Column<int>(nullable: false),
                Created = table.Column<DateTimeOffset>(nullable: false),
                StaffNumber = table.Column<int>(nullable: true),
                Accepted = table.Column<DateTimeOffset>(nullable: true),
                Completed = table.Column<DateTimeOffset>(nullable: true)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_Servings", x => x.Id);
                table.ForeignKey(
                    name: "FK_Servings_Orders_OrderId",
                    column: x => x.OrderId,
                    principalTable: "Orders",
                    principalColumn: "Id",
                    onDelete: ReferentialAction.Cascade);
                table.ForeignKey(
                    name: "FK_Servings_PointOfSales_PointOfSaleId",
                    column: x => x.PointOfSaleId,
                    principalTable: "PointOfSales",
                    principalColumn: "Id",
                    onDelete: ReferentialAction.Restrict);
            });

        migrationBuilder.CreateTable(
            name: "ServingLines",
            columns: table => new
            {
                Id = table.Column<int>(nullable: false)
                    .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                ServingId = table.Column<int>(nullable: false),
                Position = table.Column<int>(nullable: false),
                Quantity = table.Column<int>(nullable: false),
                Name = table.Column<string>(maxLength: 100, nullable: true)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_ServingLines", x => x.Id);
                table.ForeignKey(
                    name: "FK_ServingLines_Servings_ServingId",
                    column: x => x.ServingId,
                    principalTable: "Servings",
                    principalColumn: "Id",
                    onDelete: ReferentialAction.Cascade);
            });

        migrationBuilder.CreateIndex(
            name: "IX_ServingLines_ServingId",
            table: "ServingLines",
            column: "ServingId");

        migrationBuilder.CreateIndex(
            name: "IX_Servings_OrderId",
            table: "Servings",
            column: "OrderId");

        migrationBuilder.CreateIndex(
            name: "IX_Servings_PointOfSaleId",
            table: "Servings",
            column: "PointOfSaleId");

        migrationBuilder.AddForeignKey(
            name: "FK_PointOfSales_Printers_ReceiptPrinterId",
            table: "PointOfSales",
            column: "ReceiptPrinterId",
            principalTable: "Printers",
            principalColumn: "Id",
            onDelete: ReferentialAction.SetNull);
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropForeignKey(
            name: "FK_PointOfSales_Printers_ReceiptPrinterId",
            table: "PointOfSales");

        migrationBuilder.DropTable(
            name: "ServingLines");

        migrationBuilder.DropTable(
            name: "Servings");

        migrationBuilder.AddForeignKey(
            name: "FK_PointOfSales_Printers_ReceiptPrinterId",
            table: "PointOfSales",
            column: "ReceiptPrinterId",
            principalTable: "Printers",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);
    }
}
