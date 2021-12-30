using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CourseProject.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CourseProject.Configurations
{
    public class DeliveryConfiguration : IEntityTypeConfiguration<Delivery>
    {
        public void Configure(EntityTypeBuilder<Delivery> builder)
        {
            builder.ToTable(nameof(Delivery));

            builder.HasKey(d => d.Id);

            builder.Property(d => d.Count).IsRequired();
            builder.Property(d => d.Date).IsRequired();
            builder.Property(d => d.Price).IsRequired();
        }
    }
}
