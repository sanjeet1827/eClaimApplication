using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using eClaimApp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace eClaimApp.Controllers
{
    [Route("api/incident")]
    [ApiController]
    public class IncidentReportController : ControllerBase
    {
        // GET: api/IncidentReport
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/IncidentReport/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/IncidentReport
        [HttpPost]
        public void Post([FromBody] Incident incident)
        {
            var incidentData = incident;
        }

        // PUT: api/IncidentReport/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
