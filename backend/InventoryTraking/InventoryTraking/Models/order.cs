//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace InventoryTraking.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class order
    {
        public int order_id { get; set; }
        public Nullable<int> order_pro_id { get; set; }
        public Nullable<int> order_invoice { get; set; }
        public Nullable<System.DateTime> order_date { get; set; }
        public Nullable<decimal> order_tprice { get; set; }
        public string order_brand { get; set; }
        public Nullable<int> order_no_shipped { get; set; }
        public string order_cust_fname { get; set; }
        public string order_cust_lname { get; set; }
    }
}