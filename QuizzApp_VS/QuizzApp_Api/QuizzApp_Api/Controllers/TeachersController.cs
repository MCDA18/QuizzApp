using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace QuizzApp_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeachersController : ControllerBase
    {
        private readonly IConfiguration _configuarion;

        public TeachersController(IConfiguration configuration)
        {
            _configuarion = configuration;
        }
        [Route("GetAllTeachers")]
        [HttpGet]
        public JsonResult GetAllCourses()
        {
            string query = @"Select * from Teachers";
            DataTable table = new DataTable();
            string sqlDataSource = _configuarion.GetConnectionString("QuizzAppConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }
    }
}
