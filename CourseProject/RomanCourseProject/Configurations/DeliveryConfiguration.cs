using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RomanCourseProject.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace RomanCourseProject.Configurations
{
    public class DeliveryConfiguration : IEntityTypeConfiguration<Delivery>
    {
        public void Configure(EntityTypeBuilder<Delivery> builder)
        {
            builder.ToTable(nameof(Delivery));

            builder.HasKey(p => p.Id);

            builder.Property(p => p.DeliveryMethod).IsRequired();
            builder.Property(p => p.Price).IsRequired();
            builder.Property(p => p.Date).IsRequired();

            builder.HasMany(p => p.Orders).WithOne().HasForeignKey(i => i.ProductId).OnDelete(DeleteBehavior.Cascade);
        }
    }
}
