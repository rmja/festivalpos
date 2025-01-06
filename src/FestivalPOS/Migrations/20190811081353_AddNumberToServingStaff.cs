using Microsoft.EntityFrameworkCore.Migrations;

namespace FestivalPOS.Migrations;

public partial class AddNumberToServingStaff : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.AddColumn<int>(
            name: "Number",
            table: "ServingStaff",
            nullable: false,
            defaultValue: 0);
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropColumn(
            name: "Number",
            table: "ServingStaff");
    }
}
