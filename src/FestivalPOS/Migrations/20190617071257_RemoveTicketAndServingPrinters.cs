using Microsoft.EntityFrameworkCore.Migrations;

namespace FestivalPOS.Migrations
{
    public partial class RemoveTicketAndServingPrinters : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PointOfSales_Printers_ServingPrinterId",
                table: "PointOfSales");

            migrationBuilder.DropForeignKey(
                name: "FK_PointOfSales_Printers_TicketPrinterId",
                table: "PointOfSales");

            migrationBuilder.DropIndex(
                name: "IX_PointOfSales_ServingPrinterId",
                table: "PointOfSales");

            migrationBuilder.DropIndex(
                name: "IX_PointOfSales_TicketPrinterId",
                table: "PointOfSales");

            migrationBuilder.DropColumn(
                name: "ServingPrinterId",
                table: "PointOfSales");

            migrationBuilder.DropColumn(
                name: "TicketPrinterId",
                table: "PointOfSales");

            migrationBuilder.AlterColumn<int>(
                name: "TerminalId",
                table: "Printers",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "TerminalId",
                table: "Printers",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddColumn<int>(
                name: "ServingPrinterId",
                table: "PointOfSales",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "TicketPrinterId",
                table: "PointOfSales",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_PointOfSales_ServingPrinterId",
                table: "PointOfSales",
                column: "ServingPrinterId");

            migrationBuilder.CreateIndex(
                name: "IX_PointOfSales_TicketPrinterId",
                table: "PointOfSales",
                column: "TicketPrinterId");

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
        }
    }
}
