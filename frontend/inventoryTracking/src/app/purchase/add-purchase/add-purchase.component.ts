import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PurchaseService } from '../../services/purchase.service';
import { Purchase } from '../../Models/purchase'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-purchase',
  templateUrl: './add-purchase.component.html',
  styleUrls: ['./add-purchase.component.css']
})
export class AddPurchaseComponent implements OnInit {

  addPurchase: FormGroup;
  allPurchase : Observable<Purchase[]>;
  Purchase_id_update = null;
  message  = null;

  constructor(private formBuilder: FormBuilder,
              private router : Router,
              private purchaseService : PurchaseService) { }

  ngOnInit(): void {

    this.addPurchase = this.formBuilder.group({
      Purchase_id: ['', Validators.required],
      Purchase_pro_id: ['', Validators.required],
      Purchase_date: ['', Validators.required],
      Purchase_no: ['', Validators.required],
      Purchase_price: ['', Validators.required],
      Purchase_sup_fname: ['', Validators.required],
      Purchase_sup_lname: ['', Validators.required]
    });
  }

 onFormSubmit(){
    const product = this.addPurchase.value;
    this.createPurchase(product);
    this.addPurchase.reset();
   // this.router.navigate(['view-p']);
  }

  createPurchase(purchase : Purchase){
    if(this.Purchase_id_update == null){
      this.purchaseService.createPurchase(purchase)
      .subscribe( () => {
          this.message = "Record saved Successfull";
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
