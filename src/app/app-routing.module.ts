import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LibraryDashboardComponent } from './library-dashboard/library-dashboard.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductShopComponent } from './product-shop/product-shop.component';

const routes: Routes = [
  {path:'products/:productId', component: ProductShopComponent},
  {path:'products', component: ProductDetailsComponent},
  {path:'cart', component: CartItemsComponent},
  {path:'checkout', component: CheckoutFormComponent},
  {path:'library', component: LibraryDashboardComponent},
  {path:'', component: LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
