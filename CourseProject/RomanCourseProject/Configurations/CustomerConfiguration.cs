using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RomanCourseProject.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace RomanCourseProject.Configurations
{
    public class CustomerConfiguration : IEntityTypeConfiguration<Customer>
    {
        public void Configure(EntityTypeBuilder<Customer> builder)
        {
            builder.ToTable(nameof(Customer));

            builder.HasKey(p => p.Id);

            builder.Property(p => p.Name).IsRequired();
            builder.Property(p => p.Address).IsRequired();
            builder.Property(p => p.Phone).IsRequired();
            builder.Property(p => p.Contacts).IsRequired();

            builder.HasMany(p => p.Orders).WithOne().HasForeignKey(i => i.ProductId).OnDelete(DeleteBehavior.Cascade);
        }
    }
}
