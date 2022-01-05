using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RomanCourseProject.Entity
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public string Status { get; set; }

        public void CopyFrom(User user)
        {
            Name = user.Name;
            Login = user.Login;
            Password = user.Password;
            Status = user.Status;
        }
    }
}
