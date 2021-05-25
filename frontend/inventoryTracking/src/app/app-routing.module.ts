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

const routes: Routes = [
  {path: '', redirectTo:'', pathMatch:'full'},
  
  {path:'add-p', component :AddProductComponent},
  {path:'view-p', component :ViewProductComponent},
  {path:'edit-p/:product_id', component :EditProductComponent},

  {path:'add-i', component :AddPurchaseComponent},
  {path:'view-i', component :ViewPurchaseComponent},

  {path:'add-o', component :AddOrderComponent},
  {path:'view-o', component :ViewOrderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
