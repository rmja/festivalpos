using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FestivalPOS.Migrations;

/// <inheritdoc />
public partial class AddVibrantAccount : Migration
{
    /// <inheritdoc />
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.CreateTable(
            name: "VibrantAccounts",
            columns: table => new
            {
                Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                Sandbox = table.Column<bool>(type: "bit", nullable: false),
                ApiKey = table.Column<string>(type: "nvarchar(max)", nullable: false)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_VibrantAccounts", x => x.Id);
            });
    }

    /// <inheritdoc />
    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropTable(
            name: "VibrantAccounts");
    }
}
