using Microsoft.EntityFrameworkCore;
using CourseProject.Configurations;

namespace CourseProject
{
    public class AutoDbContext : DbContext
    {
        public AutoDbContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.ApplyConfiguration(new DetailConfiguration());
            builder.ApplyConfiguration(new ProviderConfiguration());
            builder.ApplyConfiguration(new DeliveryConfiguration());
            builder.ApplyConfiguration(new UserConfiguration());
        }
    }
}
