using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;
using System.Web.Mvc;

namespace AngularJSTerminal.Controllers
{
    public class CreditCardController : ApiController
    {
        // GET api/values
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        public JsonResult<CardIssuerInformation> Get(int id)
        {
            var cardIssuer = LookupCardIssuer(id);
            return Json(cardIssuer);
        }

        private CardIssuerInformation LookupCardIssuer(int id)
        {
             var cardIssuer = new CardIssuerInformation
             {
                 CountryCode = "No",
                 CountryName = "Norway",
                 Issuer = "MasterCard",
                 Brand = "Shell",
                 CardType = "Credit card"
             };
            return cardIssuer;
        }


        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }

    public class CardIssuerInformation
    {
        public string CountryCode { get; set; }
        public string CountryName { get; set; }
        public string Issuer { get; set; }
        public string Brand { get; set; }
        public string CardType { get; set; }
    }
}
