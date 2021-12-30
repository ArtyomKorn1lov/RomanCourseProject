using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject
{
    public interface IUnitOfWork
    {
        Task Commit();
    }
}
