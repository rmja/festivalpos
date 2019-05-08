using Microsoft.EntityFrameworkCore.Migrations;

namespace KajfestPOS.Migrations
{
    public partial class AddSoftDeleteToAlarmFeed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "AlarmFeeds",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "AlarmFeeds");
        }
    }
}
