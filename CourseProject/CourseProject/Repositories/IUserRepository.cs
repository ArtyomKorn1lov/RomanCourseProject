using CourseProject.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject.Repositories
{
    public interface IUserRepository
    {
        Task<List<User>> GetAll();
        Task CreateUser(User user);
        Task UpdateUser(User user);
        Task RemoveUser(int id);
        Task<User> GetById(int id);
        Task<List<User>> GetUsersByName(string name);
        Task<User> CheckLogin(string login);
        Task<User> Authorise(string login, string password);
    }
}
