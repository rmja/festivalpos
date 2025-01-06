using Microsoft.EntityFrameworkCore.Migrations;

namespace FestivalPOS.Migrations;

public partial class RestrictThatPrinterCanBeDeletedIfUsedByATerminal : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropForeignKey(
            name: "FK_Printers_Terminals_TerminalId",
            table: "Printers");

        migrationBuilder.AddForeignKey(
            name: "FK_Printers_Terminals_TerminalId",
            table: "Printers",
            column: "TerminalId",
            principalTable: "Terminals",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropForeignKey(
            name: "FK_Printers_Terminals_TerminalId",
            table: "Printers");

        migrationBuilder.AddForeignKey(
            name: "FK_Printers_Terminals_TerminalId",
            table: "Printers",
            column: "TerminalId",
            principalTable: "Terminals",
            principalColumn: "Id",
            onDelete: ReferentialAction.SetNull);
    }
}
