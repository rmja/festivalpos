using Microsoft.EntityFrameworkCore.Migrations;

namespace KajfestPOS.Migrations
{
    public partial class RemoveOrderRequirementOnPayment : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "OrderId",
                table: "Payments",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "OrderId",
                table: "Payments",
                nullable: false);
        }
    }
}
