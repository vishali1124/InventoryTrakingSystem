import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../Models/product'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
 
  searchForm: FormGroup;
  allProducts : Observable<Product[]>;
  
  constructor( private  router : Router,
               private productService : ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProduct()
                .subscribe((data:any)=>{
                  this.allProducts = data;
                  console.log(this.allProducts);
    });
  }

  

  addProduct(){
    this.router.navigate(['add-p']);
  }

  editProduct(product : Product) : void{
    this.router.navigate(['edit-p/' + product.product_id ]);
  }


  search(){

  }

  
}
