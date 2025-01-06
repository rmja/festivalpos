using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FestivalPOS.Migrations
{
    public partial class AddOrderTags : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "OrderTags",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    OrderId = table.Column<int>(nullable: false),
                    Number = table.Column<int>(nullable: false),
                    Attached = table.Column<DateTimeOffset>(nullable: false),
                    Detached = table.Column<DateTimeOffset>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderTags", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OrderTags_Orders_OrderId",
                        column: x => x.OrderId,
                        principalTable: "Orders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_OrderTags_Number",
                table: "OrderTags",
                column: "Number",
                filter: "Detached IS NULL");

            migrationBuilder.CreateIndex(
                name: "IX_OrderTags_OrderId",
                table: "OrderTags",
                column: "OrderId");

            migrationBuilder.CreateIndex(
                name: "IX_OrderTags_Number_OrderId",
                table: "OrderTags",
                columns: new[] { "Number", "OrderId" },
                unique: true,
                filter: "Detached IS NULL");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OrderTags");
        }
    }
}
