using Microsoft.EntityFrameworkCore.Migrations;

namespace FestivalPOS.Migrations;

public partial class AddUniqueConstraintOnAccountNumber : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.CreateIndex(
            name: "IX_Accounts_Number",
            table: "Accounts",
            column: "Number",
            unique: true,
            filter: "IsDeleted = 0");
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropIndex(
            name: "IX_Accounts_Number",
            table: "Accounts");
    }
}
