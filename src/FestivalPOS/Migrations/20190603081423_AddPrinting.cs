using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FestivalPOS.Migrations
{
    public partial class AddPrinting : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Payments_Orders_OrderId",
                table: "Payments");

            migrationBuilder.AddColumn<int>(
                name: "ReceiptPrinterId",
                table: "PointOfSales",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ServingPrinterId",
                table: "PointOfSales",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "TicketPrinterId",
                table: "PointOfSales",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "Presale",
                table: "PointOfSaleProducts",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AlterColumn<int>(
                name: "OrderId",
                table: "Payments",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.CreateTable(
                name: "Printer",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(maxLength: 100, nullable: false),
                    TerminalId = table.Column<int>(nullable: true),
                    BluetoothMacAddress = table.Column<string>(maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Printer", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Printer_Terminals_TerminalId",
                        column: x => x.TerminalId,
                        principalTable: "Terminals",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_PointOfSales_ReceiptPrinterId",
                table: "PointOfSales",
                column: "ReceiptPrinterId");

            migrationBuilder.CreateIndex(
                name: "IX_PointOfSales_ServingPrinterId",
                table: "PointOfSales",
                column: "ServingPrinterId");

            migrationBuilder.CreateIndex(
                name: "IX_PointOfSales_TicketPrinterId",
                table: "PointOfSales",
                column: "TicketPrinterId");

            migrationBuilder.CreateIndex(
                name: "IX_Printer_TerminalId",
                table: "Printer",
                column: "TerminalId");

            migrationBuilder.AddForeignKey(
                name: "FK_Payments_Orders_OrderId",
                table: "Payments",
                column: "OrderId",
                principalTable: "Orders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_PointOfSales_Printer_ReceiptPrinterId",
                table: "PointOfSales",
                column: "ReceiptPrinterId",
                principalTable: "Printer",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_PointOfSales_Printer_ServingPrinterId",
                table: "PointOfSales",
                column: "ServingPrinterId",
                principalTable: "Printer",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_PointOfSales_Printer_TicketPrinterId",
                table: "PointOfSales",
                column: "TicketPrinterId",
                principalTable: "Printer",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Payments_Orders_OrderId",
                table: "Payments");

            migrationBuilder.DropForeignKey(
                name: "FK_PointOfSales_Printer_ReceiptPrinterId",
                table: "PointOfSales");

            migrationBuilder.DropForeignKey(
                name: "FK_PointOfSales_Printer_ServingPrinterId",
                table: "PointOfSales");

            migrationBuilder.DropForeignKey(
                name: "FK_PointOfSales_Printer_TicketPrinterId",
                table: "PointOfSales");

            migrationBuilder.DropTable(
                name: "Printer");

            migrationBuilder.DropIndex(
                name: "IX_PointOfSales_ReceiptPrinterId",
                table: "PointOfSales");

            migrationBuilder.DropIndex(
                name: "IX_PointOfSales_ServingPrinterId",
                table: "PointOfSales");

            migrationBuilder.DropIndex(
                name: "IX_PointOfSales_TicketPrinterId",
                table: "PointOfSales");

            migrationBuilder.DropColumn(
                name: "ReceiptPrinterId",
                table: "PointOfSales");

            migrationBuilder.DropColumn(
                name: "ServingPrinterId",
                table: "PointOfSales");

            migrationBuilder.DropColumn(
                name: "TicketPrinterId",
                table: "PointOfSales");

            migrationBuilder.DropColumn(
                name: "Presale",
                table: "PointOfSaleProducts");

            migrationBuilder.AlterColumn<int>(
                name: "OrderId",
                table: "Payments",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Payments_Orders_OrderId",
                table: "Payments",
                column: "OrderId",
                principalTable: "Orders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
