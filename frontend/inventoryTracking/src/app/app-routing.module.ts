import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddOrderComponent } from './order/add-order/add-order.component';
import { ViewOrderComponent } from './order/view-order/view-order.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { ViewProductComponent } from './product/view-product/view-product.component';
import { AddPurchaseComponent } from './purchase/add-purchase/add-purchase.component';
import { ViewPurchaseComponent } from './purchase/view-purchase/view-purchase.component';
import { ForgotComponent } from './user/forgot/forgot.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {path: '', redirectTo:'', pathMatch:'full'},

  //user path
  {path:'login', component :LoginComponent},
  {path:'register', component :RegisterComponent},
  {path:'forgot', component :ForgotComponent},
  
  //product path
  {path:'add-p', component :AddProductComponent},
  {path:'view-p', component :ViewProductComponent},
  {path:'edit-p/:product_id', component :EditProductComponent},

  //purchase path
  {path:'add-i', component :AddPurchaseComponent},
  {path:'view-i', component :ViewPurchaseComponent},

  //order pathh
  {path:'add-o', component :AddOrderComponent},
  {path:'view-o', component :ViewOrderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
