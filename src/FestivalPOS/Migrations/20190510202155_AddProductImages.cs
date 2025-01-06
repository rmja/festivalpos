using Microsoft.EntityFrameworkCore.Migrations;

namespace FestivalPOS.Migrations;

public partial class AddProductImages : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.AddColumn<string>(
            name: "PreviewImageUrl",
            table: "Products",
            maxLength: 300,
            nullable: true);

        migrationBuilder.AddColumn<string>(
            name: "ThumbnailImageUrl",
            table: "Products",
            maxLength: 300,
            nullable: true);
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropColumn(
            name: "PreviewImageUrl",
            table: "Products");

        migrationBuilder.DropColumn(
            name: "ThumbnailImageUrl",
            table: "Products");
    }
}
