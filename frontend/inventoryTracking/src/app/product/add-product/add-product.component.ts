import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../Models/product'
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  //variable diclarations
  addProduct: FormGroup;
  allProducts : Observable<Product[]>;
  product_id_update = null;
  message  = null;
  productTypes : String[];
  productBrands: String[];

  //constuctor
  constructor(private formBuilder: FormBuilder,
              private router : Router,
              private productService : ProductService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    //product name
    this.productTypes = ['Highlighter','Glue','Pencil','Pen','Ballpoint'];

    //product brands
    this.productBrands = ['Atlas', 'Promate', 'Mango', 'Rathna', 'Ten'];

    //get form values
    this.addProduct = this.formBuilder.group({
      product_name: ['', Validators.required],
      product_type: ['', Validators.required],
      product_brand: ['', Validators.required],
      product_lable: ['', Validators.required],
      product_start_inv: ['', Validators.required],
      product_min_req: ['', Validators.required],
      product_unit_pr: ['', Validators.required],
      product_sell_pr: ['', Validators.required]
    });
   
  }

  //form sumbition methode
  onFormSubmit(){
    const product = this.addProduct.value;
    this.createProduct(product);
    this.addProduct.reset();
    this.toastr.success('Record insert Successfull!');
    this.router.navigate(['view-p']);
  }

  //create new product
  createProduct(product : Product){
    if(this.product_id_update == null){
      this.productService.createProduct(product)
      .subscribe( () => {          
          this.product_id_update == null;
          this.addProduct.reset();
      });
    }
  }
}
