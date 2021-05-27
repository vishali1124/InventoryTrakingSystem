import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Purchase } from '../Models/purchase'; 
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private http: HttpClient) { }

  //create purchase
  createPurchase(purchase: Purchase):Observable<Purchase>{
    return this.http.post<Purchase>(environment.baseUrl + 'Api/Purchase/InsertPurchase', purchase);
  }

  //get all purchase
  getAllPurchase():Observable<Purchase[]>{
    return this.http.get<Purchase[]>(environment.baseUrl + 'Api/Purchase/AllPurchaseDetails');    
  }

  //get purchase by purchaseID
  getPurchaseById(Purchase_id: String):Observable<Purchase>{
    return this.http.get<Purchase>(environment.baseUrl + 'Api/Purchase/GetPurchaseById/' + Purchase_id);    
  }
}
