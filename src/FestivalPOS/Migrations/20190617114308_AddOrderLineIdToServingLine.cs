using Microsoft.EntityFrameworkCore.Migrations;

namespace FestivalPOS.Migrations;

public partial class AddOrderLineIdToServingLine : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.AddColumn<int>(
            name: "OrderLineId",
            table: "ServingLines",
            nullable: false,
            defaultValue: 0);

        migrationBuilder.CreateIndex(
            name: "IX_ServingLines_OrderLineId",
            table: "ServingLines",
            column: "OrderLineId");

        migrationBuilder.AddForeignKey(
            name: "FK_ServingLines_OrderLines_OrderLineId",
            table: "ServingLines",
            column: "OrderLineId",
            principalTable: "OrderLines",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropForeignKey(
            name: "FK_ServingLines_OrderLines_OrderLineId",
            table: "ServingLines");

        migrationBuilder.DropIndex(
            name: "IX_ServingLines_OrderLineId",
            table: "ServingLines");

        migrationBuilder.DropColumn(
            name: "OrderLineId",
            table: "ServingLines");
    }
}
