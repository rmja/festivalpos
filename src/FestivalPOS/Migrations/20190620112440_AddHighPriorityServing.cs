using Microsoft.EntityFrameworkCore.Migrations;

namespace FestivalPOS.Migrations;

public partial class AddHighPriorityServing : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.AddColumn<bool>(
            name: "HighPriority",
            table: "Servings",
            nullable: false,
            defaultValue: false);

        migrationBuilder.AddColumn<bool>(
            name: "HighPriorityServing",
            table: "Accounts",
            nullable: false,
            defaultValue: false);
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropColumn(
            name: "HighPriority",
            table: "Servings");

        migrationBuilder.DropColumn(
            name: "HighPriorityServing",
            table: "Accounts");
    }
}
