using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eClaimApp.Models
{
    public class Incident
    {
        public string customerName { get; set; }

        public string policyNo { get; set; }

        public string mobileNo { get; set; }

        public string email { get; set; }

        public string location { get; set; }

        public string detail { get; set; }

        public string photoPath { get; set; }
    }
}
