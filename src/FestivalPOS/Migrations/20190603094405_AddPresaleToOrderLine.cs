using Microsoft.EntityFrameworkCore.Migrations;

namespace FestivalPOS.Migrations
{
    public partial class AddPresaleToOrderLine : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Presale",
                table: "OrderLines",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Presale",
                table: "OrderLines");
        }
    }
}
