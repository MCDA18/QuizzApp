using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using QuizzApp_Api.Models;
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
    public class QuestionsController : ControllerBase
    {
        private readonly IConfiguration _configuarion;

        public QuestionsController(IConfiguration configuration)
        {
            _configuarion = configuration;
        }
        [Route("GetAllQuestions")]
        [HttpGet]
        public JsonResult GetAllQuestions()
        {
            string query = @"Select * from Questions";
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

        [HttpPost]
        public JsonResult Post(Questions questions)
        {
            string query = @"Insert into Questions values
                            (
                             '"+questions.questionTitle+ @"',
                             '" + questions.questionPoints + @"',
                             '" + questions.questionDifficulty + @"',
                             '" + questions.questionItem1 + @"',
                             '" + questions.questionItem2 + @"',
                             '" + questions.questionItem3 + @"',
                             '" + questions.questionItem4 + @"',
                             '" + questions.questionAnswers + @"'
                             )
                                ";
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
