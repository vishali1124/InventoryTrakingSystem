using InventoryTraking.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace InventoryTraking.Controllers
{
    [RoutePrefix("Api/Purchase")]
    public class PurchaseController : ApiController
    {
        inventoryEntities2 objEntity = new inventoryEntities2();

        //get all purchase
        [HttpGet]
        [Route("AllPurchaseDetails")]
        public IQueryable<purchase> GetPurchases()
        {
            try
            {
                return objEntity.purchases;
            }
            catch (Exception)
            {
                throw;
            }
        }

        //get purchase by id
        [HttpGet]
        [Route("GetPurchaseById/{Purchase_id}")]
        public IHttpActionResult GetPurchaseById(string Purchase_id)
        {
            purchase objPurch = new purchase();
            int ID = Convert.ToInt32(Purchase_id);

            try
            {
                objPurch = objEntity.purchases.Find(ID);
                if (objPurch == null)
                {
                    return NotFound();
                }
            }
            catch (Exception)
            {
                throw;
            }

            return Ok(objPurch);
        }

        //insert purchase
        [HttpPost]
        [Route("InsertPurchase")]
        public IHttpActionResult postPurchase(purchase data)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                objEntity.purchases.Add(data);
                objEntity.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }

            return Ok(data);
        }
    }
}
