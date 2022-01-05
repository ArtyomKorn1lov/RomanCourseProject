using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RomanCourseProject
{
    public interface IUnitOfWork
    {
        Task Commit();
    }
}
