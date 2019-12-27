using Microsoft.EntityFrameworkCore.Migrations;

namespace Vega.API.Migrations
{
    public partial class SeedDatabase2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO Features (Name) VALUES ('Feature1')");
            migrationBuilder.Sql("INSERT INTO Features (Name) VALUES ('Feature2')");
            migrationBuilder.Sql("INSERT INTO Features (Name) VALUES ('Feature3')");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
                        migrationBuilder.Sql("DELETE FROM Features");

        }
    }
}
