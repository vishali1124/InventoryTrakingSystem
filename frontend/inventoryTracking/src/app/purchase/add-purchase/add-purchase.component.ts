import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PurchaseService } from '../../services/purchase.service';
import { Purchase } from '../../Models/purchase'
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/Models/product';


@Component({
  selector: 'app-add-purchase',
  templateUrl: './add-purchase.component.html',
  styleUrls: ['./add-purchase.component.css']
})
export class AddPurchaseComponent implements OnInit {

  //variable diclarations
  addPurchase: FormGroup;
  allPurchase : Observable<Purchase[]>;
  Purchase_id_update = null;
  message  = null;
  allProducts: Observable<Product[]>;

  //constuctor
  constructor(private formBuilder: FormBuilder,
              private router : Router,
              private purchaseService : PurchaseService,
              private toastr: ToastrService,
              private productService: ProductService) { }

  ngOnInit(): void {

    //get product ids
    this.productService.getAllProduct()
                .subscribe((data:any)=>{
                  this.allProducts = data;
                  console.log(this.allProducts);
    });

       //get form values
    this.addPurchase = this.formBuilder.group({
      Purchase_pro_id: ['', Validators.required],
      Purchase_date: ['', Validators.required],
      Purchase_no: ['', Validators.required],
      Purchase_price: ['', Validators.required],
      Purchase_sup_fname: ['', Validators.required],
      Purchase_sup_lname: ['', Validators.required]
    });
  }

  //form sumbition methode
  onFormSubmit(){
      const purchase = this.addPurchase.value;
      this.createPurchase(purchase);
      this.addPurchase.reset();
      this.toastr.success('Record insert Successfull!');
      this.router.navigate(['view-i']);
    }

  //create new product
  createPurchase(purchase : Purchase){
    if(this.Purchase_id_update == null){
      this.purchaseService.createPurchase(purchase)
      .subscribe( () => {
          this.Purchase_id_update == null;
          this.addPurchase.reset();
      });
    }
  }

  resetForm(){
    //this.addPurchase.reset();
    this.message = null;
  }

}
