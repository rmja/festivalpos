using Microsoft.EntityFrameworkCore.Migrations;

namespace FestivalPOS.Migrations
{
    public partial class UndoPresaleOnOrderLineAndAddReceiveableInstead : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Presale",
                table: "OrderLines");

            migrationBuilder.AddColumn<bool>(
                name: "IsServing",
                table: "Products",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "Receiveable",
                table: "OrderLines",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsServing",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "Receiveable",
                table: "OrderLines");

            migrationBuilder.AddColumn<bool>(
                name: "Presale",
                table: "OrderLines",
                nullable: false,
                defaultValue: false);
        }
    }
}
