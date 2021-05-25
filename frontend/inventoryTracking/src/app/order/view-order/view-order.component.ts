import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { Order } from '../../Models/order'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {

  searchForm: FormGroup;
  allOrder : Observable<Order[]>;

  constructor( private  router : Router,
               private orderService : OrderService) { }

  ngOnInit(): void {
    this.orderService.getAllOrder()
    .subscribe((data:any)=>{
      this.allOrder = data;
      console.log(this.allOrder);
    });
  }

  addOrder(){
    this.router.navigate(['add-o']);
  }

  editOrder(){
    this.router.navigate(['edit-o']);
  }

  search(){

  }

}
