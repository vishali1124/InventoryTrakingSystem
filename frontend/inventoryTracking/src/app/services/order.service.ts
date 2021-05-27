import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Order } from '../Models/order'; 
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) { }

  //create order
  createOrder(order: Order):Observable<Order>{
    //const httpOptions = {Headers: new HttpHeaders({'Content-Type':'application/json'})};
    return this.http.post<Order>(environment.baseUrl + 'Api/Order/InsertOrder', order, /*httpOptions*/);
  }

  //get all order
  getAllOrder():Observable<Order[]>{
    return this.http.get<Order[]>(environment.baseUrl  + 'Api/Order/AllOrderDetails');    
  }

  //get order by orderID
  getOrderById(order_id: String):Observable<Order>{
    return this.http.get<Order>(environment.baseUrl  + 'Api/Order/GetOrderById/' + order_id);    
  }
}
