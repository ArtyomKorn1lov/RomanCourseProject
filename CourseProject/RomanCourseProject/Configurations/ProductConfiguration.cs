using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RomanCourseProject.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace RomanCourseProject.Configurations
{
    public class ProductConfiguration : IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> builder)
        {
            builder.ToTable(nameof(Product));

            builder.HasKey(d => d.Id);

            builder.Property(d => d.Name).IsRequired();
            builder.Property(d => d.Price).IsRequired();
            builder.Property(d => d.Note);

            builder.HasMany(p => p.Orders).WithOne().HasForeignKey(i => i.ProductId).OnDelete(DeleteBehavior.Cascade);
        }
    }
}
