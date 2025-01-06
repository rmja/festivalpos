using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FestivalPOS.Migrations;

public partial class AddAccount : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.AddColumn<int>(
            name: "AccountId",
            table: "Payments",
            nullable: true);

        migrationBuilder.CreateTable(
            name: "Accounts",
            columns: table => new
            {
                Id = table.Column<int>(nullable: false)
                    .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                Number = table.Column<int>(nullable: false),
                Name = table.Column<string>(maxLength: 100, nullable: false),
                MaxCredit = table.Column<decimal>(type: "decimal(9,2)", nullable: false),
                RemainingCredit = table.Column<decimal>(type: "decimal(9,2)", nullable: false),
                IsDeleted = table.Column<bool>(nullable: false)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_Accounts", x => x.Id);
            });

        migrationBuilder.CreateIndex(
            name: "IX_Payments_AccountId",
            table: "Payments",
            column: "AccountId");

        migrationBuilder.AddForeignKey(
            name: "FK_Payments_Accounts_AccountId",
            table: "Payments",
            column: "AccountId",
            principalTable: "Accounts",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropForeignKey(
            name: "FK_Payments_Accounts_AccountId",
            table: "Payments");

        migrationBuilder.DropTable(
            name: "Accounts");

        migrationBuilder.DropIndex(
            name: "IX_Payments_AccountId",
            table: "Payments");

        migrationBuilder.DropColumn(
            name: "AccountId",
            table: "Payments");
    }
}
