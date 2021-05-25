using InventoryTraking.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace InventoryTraking.Controllers
{
    [RoutePrefix("Api/Order")]
    public class OrderController : ApiController
    {
        inventoryEntities1 objEntity = new inventoryEntities1();

        //get all order
        [HttpGet]
        [Route("AllOrderDetails")]
        public IQueryable<order> GetOrders()
        {
            try
            {
                return objEntity.orders;
            }
            catch (Exception)
            {
                throw;
            }
        }

        //get order by id
        [HttpGet]
        [Route("GetOrderById/{order_id}")]
        public IHttpActionResult GetPurchaseById(string order_id)
        {
            order objOrder = new order();
            int ID = Convert.ToInt32(order_id);

            try
            {
                objOrder = objEntity.orders.Find(ID);
                if (objOrder == null)
                {
                    return NotFound();
                }
            }
            catch (Exception)
            {
                throw;
            }

            return Ok(objOrder);
        }

        //insert order
        [HttpPost]
        [Route("InsertOrder")]
        public IHttpActionResult postOrder(order data)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                objEntity.orders.Add(data);
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
