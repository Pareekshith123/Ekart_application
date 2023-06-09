import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { CartComponent } from './Components/cart/cart.component';
import { ProductsComponent } from './Components/products/products.component';

const routes: Routes = [{path:'',redirectTo: 'products',pathMatch:'full'},
  {
  path: 'products', component: ProductsComponent},
  {path:'header',component: HeaderComponent},
{path:'cart',component: CartComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
