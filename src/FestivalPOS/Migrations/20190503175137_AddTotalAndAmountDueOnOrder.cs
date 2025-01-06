using Microsoft.EntityFrameworkCore.Migrations;

namespace FestivalPOS.Migrations;

public partial class AddTotalAndAmountDueOnOrder : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.AddColumn<decimal>(
            name: "AmountDue",
            table: "Orders",
            nullable: false,
            defaultValue: 0m);

        migrationBuilder.AddColumn<decimal>(
            name: "Total",
            table: "Orders",
            nullable: false,
            defaultValue: 0m);

        migrationBuilder.AlterColumn<int>(
            name: "Quantity",
            table: "OrderLines",
            nullable: false,
            oldClrType: typeof(int),
            oldNullable: true);
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropColumn(
            name: "AmountDue",
            table: "Orders");

        migrationBuilder.DropColumn(
            name: "Total",
            table: "Orders");

        migrationBuilder.AlterColumn<int>(
            name: "Quantity",
            table: "OrderLines",
            nullable: true,
            oldClrType: typeof(int));
    }
}
