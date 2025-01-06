using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FestivalPOS.Migrations;

/// <inheritdoc />
public partial class IncreasePaymentTransactionNumberAndAddPaymentProvider : Migration
{
    /// <inheritdoc />
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.AlterColumn<string>(
            name: "TransactionNumber",
            table: "Payments",
            type: "nvarchar(30)",
            maxLength: 30,
            nullable: true,
            oldClrType: typeof(string),
            oldType: "nvarchar(20)",
            oldMaxLength: 20,
            oldNullable: true);

        migrationBuilder.AddColumn<string>(
            name: "Provider",
            table: "Payments",
            type: "nvarchar(10)",
            maxLength: 10,
            nullable: true);
    }

    /// <inheritdoc />
    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropColumn(
            name: "Provider",
            table: "Payments");

        migrationBuilder.AlterColumn<string>(
            name: "TransactionNumber",
            table: "Payments",
            type: "nvarchar(20)",
            maxLength: 20,
            nullable: true,
            oldClrType: typeof(string),
            oldType: "nvarchar(30)",
            oldMaxLength: 30,
            oldNullable: true);
    }
}
