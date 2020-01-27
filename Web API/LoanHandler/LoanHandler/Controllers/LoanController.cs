using LoanHandler.Functions;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace LoanHandler.Controllers
{
    [ApiController]
    [Route("api/loans")]
    public class LoanController : ControllerBase
    {
        private LoanFunctions lf = new LoanFunctions();

        [HttpGet]
        public ActionResult<IEnumerable<Loan>> Get()
        {
            return lf.GetLoans();
        }

        [HttpGet("{id}")]
        public ActionResult<Loan> Get(int id)
        {
            var result = lf.GetLoan(id);

            if (result == null)
            {
                return new NotFoundObjectResult(id);
            }

            return result;
        }

        [HttpPost]
        public ActionResult<Loan> Add(Loan source)
        {
            return lf.Add(source);
        }

        [HttpDelete("{id}")]
        public ActionResult<bool> Delete(int id)
        {
            var result = lf.Delete(id);

            if (result == null)
            {
                return new NotFoundObjectResult(id);
            }

            return result;
        }
    }
}
