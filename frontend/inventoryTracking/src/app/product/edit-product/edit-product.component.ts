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

  editProduct: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router :Router,
              private routes :ActivatedRoute,
              private productService : ProductService,
              private product: ProductService) { }

  ngOnInit(): void {

    const routesParams = this.routes.snapshot.params;
    console.log(routesParams.product_id);

    this.editProduct = this.formBuilder.group({
      product_id: ['', Validators.required],
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

    this.productService.getProductById(routesParams.product_id)
    .subscribe((data :any) =>{
      this.editProduct.patchValue(data);
    });
  }

  
  save(){
      this.router.navigate(['view-p']);
  }

 /* 
 (click)="updateProduct()" 
 updateProduct(){
    product.product_id = this.updateProduct;  
      this.employeeService.updateEmployee(employee).subscribe(() => {  
        this.dataSaved = true;  
        this.massage = 'Record Updated Successfully';  
        this.loadAllEmployees();  
        this.employeeIdUpdate = null;  
        this.employeeForm.reset();  
      });  
  }*/
}
