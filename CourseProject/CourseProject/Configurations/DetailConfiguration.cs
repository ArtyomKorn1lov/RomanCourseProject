using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CourseProject.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CourseProject.Configurations
{
    public class DetailConfiguration : IEntityTypeConfiguration<Detail>
    {
        public void Configure(EntityTypeBuilder<Detail> builder)
        {
            builder.ToTable(nameof(Detail));

            builder.HasKey(d => d.Id);

            builder.Property(d => d.Name).IsRequired();
            builder.Property(d => d.ArticleNumber).IsRequired();
            builder.Property(d => d.Price).IsRequired();
            builder.Property(d => d.Note);

            builder.HasMany(p => p.Deliverys).WithOne().HasForeignKey(i => i.DetailId).OnDelete(DeleteBehavior.Cascade);
        }
    }
}
