import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PurchaseService } from '../../services/purchase.service';
import { Purchase } from '../../Models/purchase'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-purchase',
  templateUrl: './view-purchase.component.html',
  styleUrls: ['./view-purchase.component.css']
})
export class ViewPurchaseComponent implements OnInit {

  searchForm: FormGroup;
  allPurchase: Observable<Purchase[]>;

  constructor( private  router : Router,
               private purchaseService : PurchaseService) { }

  ngOnInit(): void {
    this.purchaseService.getAllPurchase()
    .subscribe((data:any)=>{
      this.allPurchase = data;
      console.log(this.allPurchase);
    });
  } 

  addPurchase(){
    this.router.navigate(['add-i']);
  }

  editPurchase(){
    this.router.navigate(['edit-i']);
  }

  search(){

  }


}
