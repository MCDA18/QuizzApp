using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizzApp_Api.Models
{
    public class Questions
    {
        public int questionID { get; set; }
        public string questionTitle { get; set; }
        public string questionPoints { get; set; }
        public string questionDifficulty { get; set; }

        public string questionItem1 { get; set; }

        public string questionItem2 { get; set; }

        public string questionItem3 { get; set; }

        public string questionItem4 { get; set; }

        public string questionAnswers { get; set; }
    }
}
