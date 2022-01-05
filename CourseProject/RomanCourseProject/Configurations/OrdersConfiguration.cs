using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RomanCourseProject.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace RomanCourseProject.Configurations
{
    public class OrdersConfiguration : IEntityTypeConfiguration<Orders>
    {
        public void Configure(EntityTypeBuilder<Orders> builder)
        {
            builder.ToTable(nameof(Orders));

            builder.HasKey(d => d.Id);

            builder.Property(d => d.Count).IsRequired();
            builder.Property(d => d.Date).IsRequired();
            builder.Property(d => d.Price).IsRequired();
        }
    }
}
