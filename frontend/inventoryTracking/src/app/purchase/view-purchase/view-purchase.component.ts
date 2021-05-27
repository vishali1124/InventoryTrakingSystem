import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PurchaseService } from '../../services/purchase.service';
import { Purchase } from '../../Models/purchase'
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-view-purchase',
  templateUrl: './view-purchase.component.html',
  styleUrls: ['./view-purchase.component.css']
})
export class ViewPurchaseComponent implements OnInit {

  p: any;
  filter :any;
  searchForm: FormGroup;
  allPurchase: Observable<Purchase[]>;
  allProduct: Observable<Product[]>;  

  constructor( private  router : Router,
               private purchaseService : PurchaseService,
               private productService: ProductService) { }

  ngOnInit(): void {
    this.purchaseService.getAllPurchase()
    .subscribe((data:any)=>{
      this.allPurchase = data;
      console.log(this.allPurchase);
    });

    this.productService.getAllProduct()
    .subscribe((data:any)=>{
      this.allProduct = data;
      console.log(this.allProduct);
    });
  } 

  addPurchase(){
    this.router.navigate(['add-i']);
  }

  editPurchase(){
    this.router.navigate(['edit-i']);
  }

}
