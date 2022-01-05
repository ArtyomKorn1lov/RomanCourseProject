using RomanCourseProject.Entity;
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace RomanCourseProject.Repositories
{
    public class UserRepository : IUserRepository
    {
        private OrderDbContext _orderDbContext;

        public UserRepository(OrderDbContext autoDbContext)
        {
            _orderDbContext = autoDbContext;
        }

        public async Task<User> CheckLogin(string login)
        {
            User user = await _orderDbContext.Set<User>().FirstOrDefaultAsync(d => d.Login == login);
            if (user != null)
            {
                return user;
            }
            return null;
        }

        public async Task CreateUser(User user)
        {
            await _orderDbContext.Set<User>().AddAsync(user);
        }

        public async Task<List<User>> GetAll()
        {
            return await _orderDbContext.Set<User>().ToListAsync();
        }

        public async Task<User> GetById(int id)
        {
            return await _orderDbContext.Set<User>().FirstOrDefaultAsync(d => d.Id == id);
        }

        public async Task<List<User>> GetUsersByName(string name)
        {
            return await _orderDbContext.Set<User>().Where(d => EF.Functions.Like(d.Name, name)).ToListAsync();
        }

        public async Task RemoveUser(int id)
        {
            User user = await GetById(id);
            if (user != null)
                _orderDbContext.Set<User>().Remove(user);
        }

        public async Task UpdateUser(User user)
        {
            User _user = await GetById(user.Id);
            _user.CopyFrom(user);
        }

        public async Task<User> Authorise(string login, string password)
        {
            User user = await _orderDbContext.Set<User>().FirstOrDefaultAsync(d => d.Login == login && d.Password == password);
            if (user != null)
            {
                return user;
            }
            return null;
        }
    }
}
