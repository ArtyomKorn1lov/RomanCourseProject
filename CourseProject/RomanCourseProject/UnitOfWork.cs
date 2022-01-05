using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RomanCourseProject
{
    public class UnitOfWork : IUnitOfWork
    {
        private OrderDbContext _orderDbContext;

        public UnitOfWork(OrderDbContext orderDbContext)
        {
            _orderDbContext = orderDbContext;
        }

        public async Task Commit()
        {
            await _orderDbContext.SaveChangesAsync();
        }
    }
}
