using InventoryTraking.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace InventoryTraking.Controllers
{
    [RoutePrefix("Api/Product")]
    public class ProductController : ApiController
    {
        inventoryEntities2 objEntity = new inventoryEntities2();

       //get all products
        [HttpGet]
        [Route("AllProductDetails")]
        public IQueryable<product> GetProduct()
        {
            try
            {
                return objEntity.products;
            }
            catch(Exception)
            {
                throw;
            }
        }

        //get products by id
        [HttpGet]
        [Route("GetProductById/{product_id}")]
        public IHttpActionResult GetProductById(string product_id)
        {
            product objPro = new product();
            int ID = Convert.ToInt32(product_id);

            try
            {
                objPro = objEntity.products.Find(ID);
                if (objPro == null)
                {
                    return NotFound();
                }
            }
            catch(Exception)
            {
                throw;
            }

            return Ok(objPro);
        }

        //insert product
        [HttpPost]
        [Route("InsertProduct")]
        public IHttpActionResult postProduct(product data)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                objEntity.products.Add(data);
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
