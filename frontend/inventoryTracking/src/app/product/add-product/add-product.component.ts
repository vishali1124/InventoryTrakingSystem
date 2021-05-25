import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../Models/product'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProduct: FormGroup;
  allProducts : Observable<Product[]>;
  product_id_update = null;
  message  = null;

  constructor(private formBuilder: FormBuilder,
              private router : Router,
              private productService : ProductService) { }

  ngOnInit(): void {
    this.addProduct = this.formBuilder.group({
      product_id:['', Validators.required],
      product_name: ['', Validators.required],
      product_type: ['', Validators.required],
      product_brand: ['', Validators.required],
      product_lable: ['', Validators.required],
      product_start_inv: ['', Validators.required],
      product_in_inv: ['', Validators.required],
      product_min_req: ['', Validators.required],
      product_unit_pr: ['', Validators.required],
      product_sell_pr: ['', Validators.required]
    });
   
  }

  onFormSubmit(){
    const product = this.addProduct.value;
    this.createProduct(product);
    this.addProduct.reset();
   // this.router.navigate(['view-p']);
  }

  createProduct(product : Product){
    if(this.product_id_update == null){
      this.productService.createProduct(product)
      .subscribe( () => {
          this.message = "Record saved Successfull";
          this.product_id_update == null;
          this.addProduct.reset();
      });
    }
  }

  resetForm(){
    //this.addProduct.reset();
    this.message = null;
  }


  

}
