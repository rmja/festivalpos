using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FestivalPOS.Migrations;

public partial class RenameProductImageFields : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.RenameColumn(
            name: "ThumbnailImageUrl",
            table: "Products",
            newName: "ThumbnailImageName");

        migrationBuilder.RenameColumn(
            name: "PreviewImageUrl",
            table: "Products",
            newName: "PreviewImageName");
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.RenameColumn(
            name: "ThumbnailImageName",
            table: "Products",
            newName: "ThumbnailImageUrl");

        migrationBuilder.RenameColumn(
            name: "PreviewImageName",
            table: "Products",
            newName: "PreviewImageUrl");
    }
}
