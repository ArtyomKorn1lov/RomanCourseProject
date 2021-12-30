using CourseProject.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject.Configurations
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.ToTable(nameof(User));

            builder.HasKey(d => d.Id);

            builder.Property(d => d.Name).IsRequired();
            builder.Property(d => d.Login).IsRequired();
            builder.Property(d => d.Password).IsRequired();
            builder.Property(d => d.Status).IsRequired();
        }
    }
}
