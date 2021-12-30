using CourseProject.Dto;
using CourseProject.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject.Converters
{
    public class UserDtoConverter
    {
        public static UserDto ConvertToUserDto(User user)
        {
            if(user == null)
            {
                return null;
            }
            else
            {
                return new UserDto
                {
                    Id = user.Id,
                    Name = user.Name,
                    Login = user.Login,
                    Password = user.Password,
                    Status = user.Status
                };
            }
        }
        public static User ConvertToUserEntity(UserDto user)
        {
            if (user == null)
            {
                return null;
            }
            else
            {
                return new User
                {
                    Id = user.Id,
                    Name = user.Name,
                    Login = user.Login,
                    Password = user.Password,
                    Status = user.Status
                };
            }
        }
    }
}
