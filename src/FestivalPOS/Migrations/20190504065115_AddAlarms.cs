using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FestivalPOS.Migrations
{
    public partial class AddAlarms : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AlarmFeeds",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<int>(maxLength: 100, nullable: false),
                    SubscriberEmail = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AlarmFeeds", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AlarmEvents",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AlarmFeedId = table.Column<int>(nullable: false),
                    TerminalId = table.Column<int>(nullable: false),
                    PointOfSaleId = table.Column<int>(nullable: false),
                    Cancelled = table.Column<DateTimeOffset>(nullable: true),
                    Created = table.Column<DateTimeOffset>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AlarmEvents", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AlarmEvents_AlarmFeeds_AlarmFeedId",
                        column: x => x.AlarmFeedId,
                        principalTable: "AlarmFeeds",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AlarmEvents_PointOfSales_PointOfSaleId",
                        column: x => x.PointOfSaleId,
                        principalTable: "PointOfSales",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AlarmEvents_Terminals_TerminalId",
                        column: x => x.TerminalId,
                        principalTable: "Terminals",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AlarmEvents_AlarmFeedId",
                table: "AlarmEvents",
                column: "AlarmFeedId");

            migrationBuilder.CreateIndex(
                name: "IX_AlarmEvents_PointOfSaleId",
                table: "AlarmEvents",
                column: "PointOfSaleId");

            migrationBuilder.CreateIndex(
                name: "IX_AlarmEvents_TerminalId",
                table: "AlarmEvents",
                column: "TerminalId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AlarmEvents");

            migrationBuilder.DropTable(
                name: "AlarmFeeds");
        }
    }
}
