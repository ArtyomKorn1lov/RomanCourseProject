using Microsoft.EntityFrameworkCore.Migrations;

namespace CourseProject.Migrations
{
    public partial class UpdateKey : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Delivery",
                table: "Delivery");

            migrationBuilder.DropIndex(
                name: "IX_Delivery_ProviderId",
                table: "Delivery");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "Delivery");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Delivery",
                table: "Delivery",
                columns: new[] { "ProviderId", "DetailId" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Delivery",
                table: "Delivery");

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "Delivery",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Delivery",
                table: "Delivery",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_Delivery_ProviderId",
                table: "Delivery",
                column: "ProviderId");
        }
    }
}
