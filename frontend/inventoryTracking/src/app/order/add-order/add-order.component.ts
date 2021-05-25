import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { Order } from '../../Models/order'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  addOrder: FormGroup;
  allOrder : Observable<Order[]>;
  order_id_update = null;
  message  = null;

  constructor(private formBuilder: FormBuilder,
              private router : Router,
              private orderService : OrderService) { }

  ngOnInit(): void {
    this.addOrder = this.formBuilder.group({
      order_id: [],
      order_pro_id: ['', Validators.required],
      order_invoice: ['', Validators.required],
      order_date: ['', Validators.required],
      order_tprice: ['', Validators.required],
      order_brand: ['', Validators.required],
      order_no_shipped: ['', Validators.required],
      order_cust_fname: ['', Validators.required],
      order_cust_lname: ['', Validators.required]
    });
  }

  onFormSubmit(){
    const order = this.addOrder.value;
    this.createProduct(order);
    this.addOrder.reset();
   // this.router.navigate(['view-p']);
  }

  createProduct(order : Order){
    if(this.order_id_update == null){
      this.orderService.createOrder(order)
      .subscribe( () => {
          this.message = "Record saved Successfull";
          this.order_id_update == null;
          this.addOrder.reset();
      });
    }
  }

  resetForm(){
    //this.addOrder.reset();
    this.message = null;
  }
}
