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
        [System.Web.Http.Route("GetIssuerList")]
        public JsonResult<List<Issuer>> Get(int merchantId, Guid transactionId )
        {
            var issuerList = GetIssuerList();
            return Json(issuerList);
        }

        private List<Issuer> GetIssuerList()
        {
            var issuerList = new List<Issuer>
            {
                new Issuer
                {
                    AltText = "Visa",
                    ImgUrl = "https://dev.epayment.nets.eu/images/Issuers/icons/visa.png",
                    IssuerId = 3,
                    Name = "visa"

                },
                new Issuer
                {
                    AltText = "Master Card",
                    ImgUrl = "https://dev.epayment.nets.eu/images/Issuers/icons/mastercard.gif",
                    IssuerId = 4,
                    Name = "MasterCard"
                },
                new Issuer
                {
                    AltText = "Meastro",
                    ImgUrl = "https://dev.epayment.nets.eu//Images/Issuers/Icons/maestro.gif",
                    IssuerId = 3,
                    Name = "Maestro"
                },

            };
            return issuerList;
        }

        public class Issuer
        {
            public int IssuerId { get; set; }
            public string Name { get; set; }
            public string AltText { get; set; }
            public string ImgUrl { get; set; }
        }

        [System.Web.Http.Route("GetIssuer")]
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
