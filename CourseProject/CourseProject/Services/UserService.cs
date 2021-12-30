using CourseProject.Entity;
using CourseProject.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject.Services
{
    public class UserService : IUserService
    {
        private IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<User> CheckLogin(string login)
        {
            try
            {
                User user = await _userRepository.CheckLogin(login);
                if (user == null)
                {
                    return null;
                }
                return user;
            }
            catch
            {
                return null;
            }
        }

        public async Task<bool> CreateUser(User user)
        {
            try
            {
                await _userRepository.CreateUser(user);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<List<User>> GetAll()
        {
            try
            {
                return await _userRepository.GetAll();
            }
            catch
            {
                return null;
            }
        }

        public async Task<User> GetById(int id)
        {
            try
            {
                return await _userRepository.GetById(id);
            }
            catch
            {
                return null;
            }
        }

        public async Task<List<User>> GetUsersByName(string name)
        {
            try
            {
                return await _userRepository.GetUsersByName(name);
            }
            catch
            {
                return null;
            }
        }

        public async Task<bool> RemoveUser(int id)
        {
            try
            {
                await _userRepository.RemoveUser(id);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<bool> UpdateUser(User user)
        {
            try
            {
                await _userRepository.UpdateUser(user);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<User> Authorise(string login, string password)
        {
            try
            {
                User user = await _userRepository.Authorise(login, password);
                if (user == null)
                {
                    return null;
                }
                return user;
            }
            catch
            {
                return null;
            }
        }
    }
}
