using Microsoft.EntityFrameworkCore.Migrations;

namespace FestivalPOS.Migrations
{
    public partial class AddSetNullOnPrinterTerminal : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PointOfSales_Printer_ReceiptPrinterId",
                table: "PointOfSales");

            migrationBuilder.DropForeignKey(
                name: "FK_PointOfSales_Printer_ServingPrinterId",
                table: "PointOfSales");

            migrationBuilder.DropForeignKey(
                name: "FK_PointOfSales_Printer_TicketPrinterId",
                table: "PointOfSales");

            migrationBuilder.DropForeignKey(
                name: "FK_Printer_Terminals_TerminalId",
                table: "Printer");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Printer",
                table: "Printer");

            migrationBuilder.RenameTable(
                name: "Printer",
                newName: "Printers");

            migrationBuilder.RenameIndex(
                name: "IX_Printer_TerminalId",
                table: "Printers",
                newName: "IX_Printers_TerminalId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Printers",
                table: "Printers",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_PointOfSales_Printers_ReceiptPrinterId",
                table: "PointOfSales",
                column: "ReceiptPrinterId",
                principalTable: "Printers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_PointOfSales_Printers_ServingPrinterId",
                table: "PointOfSales",
                column: "ServingPrinterId",
                principalTable: "Printers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_PointOfSales_Printers_TicketPrinterId",
                table: "PointOfSales",
                column: "TicketPrinterId",
                principalTable: "Printers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Printers_Terminals_TerminalId",
                table: "Printers",
                column: "TerminalId",
                principalTable: "Terminals",
                principalColumn: "Id",
                onDelete: ReferentialAction.SetNull);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PointOfSales_Printers_ReceiptPrinterId",
                table: "PointOfSales");

            migrationBuilder.DropForeignKey(
                name: "FK_PointOfSales_Printers_ServingPrinterId",
                table: "PointOfSales");

            migrationBuilder.DropForeignKey(
                name: "FK_PointOfSales_Printers_TicketPrinterId",
                table: "PointOfSales");

            migrationBuilder.DropForeignKey(
                name: "FK_Printers_Terminals_TerminalId",
                table: "Printers");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Printers",
                table: "Printers");

            migrationBuilder.RenameTable(
                name: "Printers",
                newName: "Printer");

            migrationBuilder.RenameIndex(
                name: "IX_Printers_TerminalId",
                table: "Printer",
                newName: "IX_Printer_TerminalId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Printer",
                table: "Printer",
                column: "Id");

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

            migrationBuilder.AddForeignKey(
                name: "FK_Printer_Terminals_TerminalId",
                table: "Printer",
                column: "TerminalId",
                principalTable: "Terminals",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
