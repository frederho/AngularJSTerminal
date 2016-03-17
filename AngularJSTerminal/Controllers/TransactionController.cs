
using System.Web.Http;
using System.Web.Http.Results;
using System.Web.Mvc;

namespace AngularJSTerminal.Controllers
{
    public class TransactionController : ApiController
    {
        private TransactionDetails GetTransactionDetails()
        {
            return new TransactionDetails
            {
                Currency = "NOK",
                OrderDescription = "Billetter til gokk",
                OrderNumber = 123,
                Price = 10000000
            };
        }
        public class TransactionDetails
        {
            public int OrderNumber { get; set; }
            public string OrderDescription { get; set; }
            public int Price { get; set; }
            public string Currency { get; set; }
        }

        [System.Web.Http.Route("GetTransactionDetails")]
        public JsonResult<TransactionDetails> Get()
        {
            var details = GetTransactionDetails();
            return Json(details);
        }
    }
}
