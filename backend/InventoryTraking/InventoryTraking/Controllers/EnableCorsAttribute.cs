using System;

namespace InventoryTraking.Controllers
{
    internal class EnableCorsAttribute : Attribute
    {
        public EnableCorsAttribute(string origins, string headers, string methods)
        {
            Origins = origins;
            Headers = headers;
            Methods = methods;
        }

        public string Origins { get; }
        public string Headers { get; }
        public string Methods { get; }
    }
}