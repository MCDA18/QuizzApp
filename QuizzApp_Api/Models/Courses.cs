using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizzApp_Api.Models
{
    public class Courses
    {
        public int courseID { get; set; }
        public string CourseName { get; set; }
        public string CourseDetails { get; set; }

        public Teachers teacherID { get; set; }
    }
}
