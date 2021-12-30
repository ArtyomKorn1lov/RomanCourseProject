using CourseProject.Entity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject.Services
{
    public interface IUserService
    {
        Task<List<User>> GetAll();
        Task<User> CheckLogin(string login);
        Task<User> Authorise(string login, string password);
        Task<bool> CreateUser(User user);
        Task<bool> UpdateUser(User user);
        Task<bool> RemoveUser(int id);
        Task<User> GetById(int id);
        Task<List<User>> GetUsersByName(string name);
    }
}
