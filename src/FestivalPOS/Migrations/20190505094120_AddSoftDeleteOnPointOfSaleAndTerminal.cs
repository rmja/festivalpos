using Microsoft.EntityFrameworkCore.Migrations;

namespace KajfestPOS.Migrations
{
    public partial class AddSoftDeleteOnPointOfSaleAndTerminal : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "Terminals",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "PointOfSales",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "Terminals");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "PointOfSales");
        }
    }
}
