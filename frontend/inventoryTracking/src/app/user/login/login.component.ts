import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  //navigate to register page
  register(){
    this.router.navigate(['register']);
  }

  //navigate to product viw page
  home(){
    this.router.navigate(['view-p']);
  }

  //navigate to forgot page
  forgot(){
    this.router.navigate(['forgot']);
  }

}
