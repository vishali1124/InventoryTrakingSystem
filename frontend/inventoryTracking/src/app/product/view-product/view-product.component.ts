import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../Models/product'
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
 
  //verables diclaration 
  p: any;
  filter :any;
  searchForm: FormGroup;
  allProducts : Observable<Product[]>;
  products: any;
  
  //constructor
  constructor( private  router : Router,
               private productService : ProductService,
               private toastr: ToastrService) { }

  ngOnInit(): void {
    this.productService.getAllProduct()
                .subscribe((data:any)=>{
                  this.allProducts = data;
                  console.log(this.allProducts);
    });
  }
  
  //add product
  addProduct(){
    this.router.navigate(['add-p']);
  }

  //edit product
  editProduct(product : Product) : void{
    this.toastr.success('Record insert Successfull!');
    this.router.navigate(['edit-p/' + product.product_id ]);
  }

  //delete product
  deleteProduct(product : Product) : void{
   this.productService.DeleteProductDetails(product.product_id)
   .subscribe(data =>{
     this.products - this.products.filter(s => s !== product);
   });
   this.router.navigate(['view-p']);
  }  
}
