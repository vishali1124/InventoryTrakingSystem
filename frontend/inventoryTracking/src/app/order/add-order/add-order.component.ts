import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { Order } from '../../Models/order'
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  
  //variable diclarations
  addOrder: FormGroup;
  allOrder : Observable<Order[]>;
  order_id_update = null;
  message  = null;
  productBrands : String[];
  allProducts: Observable<Product[]>;

  //constuctor
  constructor(private formBuilder: FormBuilder,
              private router : Router,
              private orderService : OrderService,
              private toastr: ToastrService,
              private productService: ProductService) { }

  ngOnInit(): void {

     //get product ids
     this.productService.getAllProduct()
     .subscribe((data:any)=>{
       this.allProducts = data;
       console.log(this.allProducts);
     });

    //product brands
    this.productBrands = ['Atlas', 'Promate', 'Mango', 'Rathna', 'Ten'];

    //get form values
    this.addOrder = this.formBuilder.group({
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

  //form sumbition methode
  onFormSubmit(){
    const order = this.addOrder.value;
    this.createProduct(order);
    this.addOrder.reset();
    this.toastr.success('Record insert Successfull!');
    this.router.navigate(['view-o']);
  }

  //create new product
  createProduct(order : Order){
    if(this.order_id_update == null){
      this.orderService.createOrder(order)
      .subscribe( () => {
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
