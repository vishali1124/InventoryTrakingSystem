import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addProducts(){
    this.router.navigate(['view-p']);
  }

  addPurchases(){
    this.router.navigate(['view-i']);
  }

  addOutgoingOrder(){
    this.router.navigate(['view-o']);
  }

  viewReports(){
    //this.router.navigate(['view']);
  }

}
