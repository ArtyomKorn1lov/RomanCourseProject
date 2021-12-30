using CourseProject.Converters;
using CourseProject.Dto;
using CourseProject.Entity;
using CourseProject.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject.Controllers
{
    [ApiController]
    [Route("api/user")]
    public class UserController : Controller
    {
        private IUnitOfWork _unitOfWork;
        private IUserService _userService;

        public UserController(IUnitOfWork unitOfWork, IUserService userService)
        {
            _unitOfWork = unitOfWork;
            _userService = userService;
        }

        [HttpGet("all")]
        public async Task<List<UserDto>> GetAll()
        {
            List<User> users = await _userService.GetAll();
            if (users == null)
            {
                return new List<UserDto>();
            }
            return users.Select(d => UserDtoConverter.ConvertToUserDto(d)).ToList();
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser(UserDto userDto)
        {
            if (await _userService.CreateUser(UserDtoConverter.ConvertToUserEntity(userDto)))
            {
                await _unitOfWork.Commit();
                return Ok("success");
            }
            return BadRequest("error");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            if (await _userService.RemoveUser(id))
            {
                await _unitOfWork.Commit();
                return Ok("success");
            }
            return BadRequest("error");
        }

        [HttpGet("{id}")]
        public async Task<UserDto> GetDetailById(int id)
        {
           User user = await _userService.GetById(id);
            if (user == null)
            {
                return new UserDto();
            }
            return UserDtoConverter.ConvertToUserDto(user);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateUser(UserDto user)
        {
            if (await _userService.UpdateUser(UserDtoConverter.ConvertToUserEntity(user)))
            {
                await _unitOfWork.Commit();
                return Ok("success");
            }
            return BadRequest("error");
        }

        [HttpGet("by-name/{name}")]
        public async Task<List<UserDto>> GetByName(string name)
        {
            List<User> users = await _userService.GetUsersByName(name);
            if (users == null)
            {
                return new List<UserDto>();
            }
            return users.Select(d => UserDtoConverter.ConvertToUserDto(d)).ToList();
        }

        [HttpGet("check-log/{login}")]
        public async Task<UserDto> CheckLogin(string login)
        {
            User user = await _userService.CheckLogin(login);
            if (user == null)
            {
                return null;
            }
            return UserDtoConverter.ConvertToUserDto(user);
        }

        [HttpGet("authorise/{login}/{password}")]
        public async Task<UserDto> CheckLogin(string login, string password)
        {
            User user = await _userService.Authorise(login, password);
            if (user == null)
            {
                return null;
            }
            return UserDtoConverter.ConvertToUserDto(user);
        }
    }
}
