using Microsoft.EntityFrameworkCore.Migrations;

namespace FestivalPOS.Migrations;

public partial class MoveIsServingFromProductToPosProduct : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.AddColumn<bool>(
            name: "IsServing",
            table: "PointOfSaleProducts",
            nullable: false,
            defaultValue: false);

        migrationBuilder.DropColumn(
            name: "IsServing",
            table: "Products");
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropColumn(
            name: "IsServing",
            table: "PointOfSaleProducts");

        migrationBuilder.AddColumn<bool>(
            name: "IsServing",
            table: "Products",
            nullable: false,
            defaultValue: false);
    }
}
