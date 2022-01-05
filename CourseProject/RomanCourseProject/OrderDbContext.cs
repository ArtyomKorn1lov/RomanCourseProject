using Microsoft.EntityFrameworkCore;
using RomanCourseProject.Configurations;

namespace RomanCourseProject
{
    public class OrderDbContext : DbContext
    {
        public OrderDbContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.ApplyConfiguration(new ProductConfiguration());
            builder.ApplyConfiguration(new CustomerConfiguration());
            builder.ApplyConfiguration(new OrdersConfiguration());
            builder.ApplyConfiguration(new DeliveryConfiguration());
            builder.ApplyConfiguration(new UserConfiguration());
        }
    }
}
