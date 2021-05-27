import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  //variable diclarations
  editProduct: FormGroup;
  productTypes : String[];
  productBrands: String[];

  //constuctor
  constructor(private formBuilder: FormBuilder,
              private router :Router,
              private routes :ActivatedRoute,
              private productService : ProductService,
              private product: ProductService) { }

  ngOnInit(): void {

    //product name
    this.productTypes = ['Highlighter','Glue','Pencil','Pen','Ballpoint'];

    //product brands
    this.productBrands = ['Atlas', 'Promate', 'Mango', 'Rathna', 'Ten'];

    const routesParams = this.routes.snapshot.params;
    console.log(routesParams.product_id);

    this.editProduct = this.formBuilder.group({
      product_id: ['', Validators.required],
      product_name: ['', Validators.required],
      product_type: ['', Validators.required],
      product_brand: ['', Validators.required],
      product_lable: ['', Validators.required],
      product_start_inv: ['', Validators.required],
      product_min_req: ['', Validators.required],
      product_unit_pr: ['', Validators.required],
      product_sell_pr: ['', Validators.required]
    });  
    
    this.productService.getProductById(routesParams.product_id)
    .subscribe((data :any) =>{
      this.editProduct.patchValue(data);
    });  
  }

 //update product details
 updateProduct(){
    this.productService.updateProduct(this.editProduct.value)
    .subscribe( ()=> {
      this.router.navigate(['view-p']);
    });   
  }
}
