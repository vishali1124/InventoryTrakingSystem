import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FooterComponent } from './index/footer/footer.component';
import { NavbarComponent } from './index/navbar/navbar.component';
import { MenuComponent } from './index/menu/menu.component';

import { AddProductComponent } from './product/add-product/add-product.component';
import { ViewProductComponent } from './product/view-product/view-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';

import { AddPurchaseComponent } from './purchase/add-purchase/add-purchase.component';
import { ViewPurchaseComponent } from './purchase/view-purchase/view-purchase.component';

import { AddOrderComponent } from './order/add-order/add-order.component';
import { ViewOrderComponent } from './order/view-order/view-order.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ForgotComponent } from './user/forgot/forgot.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    MenuComponent,

    AddProductComponent,
    ViewProductComponent,
    EditProductComponent,

    AddPurchaseComponent,
    ViewPurchaseComponent,
    
    AddOrderComponent,
    ViewOrderComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    Ng2SearchPipeModule 
  ],

  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
