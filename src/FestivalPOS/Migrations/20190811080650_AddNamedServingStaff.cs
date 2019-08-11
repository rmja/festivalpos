using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FestivalPOS.Migrations
{
    public partial class AddNamedServingStaff : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NoOfServingStaff",
                table: "PointOfSales");

            migrationBuilder.CreateTable(
                name: "ServingStaff",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    PointOfSaleId = table.Column<int>(nullable: false),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ServingStaff", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ServingStaff_PointOfSales_PointOfSaleId",
                        column: x => x.PointOfSaleId,
                        principalTable: "PointOfSales",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ServingStaff_PointOfSaleId",
                table: "ServingStaff",
                column: "PointOfSaleId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ServingStaff");

            migrationBuilder.AddColumn<int>(
                name: "NoOfServingStaff",
                table: "PointOfSales",
                nullable: false,
                defaultValue: 0);
        }
    }
}
