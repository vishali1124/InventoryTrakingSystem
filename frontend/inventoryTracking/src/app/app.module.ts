import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './index/footer/footer.component';
import { NavbarComponent } from './index/navbar/navbar.component';
import { MenuComponent } from './index/menu/menu.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ViewProductComponent } from './product/view-product/view-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPurchaseComponent } from './purchase/add-purchase/add-purchase.component';
import { ViewPurchaseComponent } from './purchase/view-purchase/view-purchase.component';
import { AddOrderComponent } from './order/add-order/add-order.component';
import { ViewOrderComponent } from './order/view-order/view-order.component';
import { HttpClientModule } from '@angular/common/http';

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
    ViewOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
