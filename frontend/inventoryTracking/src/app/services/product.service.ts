import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Product } from '../Models/product'; 
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  
  //create product
  createProduct(product: Product):Observable<Product>{
    //const httpOptions = { headers: new HttpHeaders({'Content-Type':'application/json'})};
    return this.http.post<Product>(environment.baseUrl + 'Api/Product/InsertProduct', product /*httpOptions*/);  
  }

  //get all product
  getAllProduct():Observable<Product[]>{
    return this.http.get<Product[]>(environment.baseUrl + 'Api/Product/AllProductDetails');    
  }

  //get product by productID
  getProductById(product_id: String):Observable<Product>{
    return this.http.get<Product>(environment.baseUrl + 'Api/Product/GetProductById/' + product_id);    
  }
}
