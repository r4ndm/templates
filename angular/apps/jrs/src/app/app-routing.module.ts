import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'JRS | Home' },
  { path: 'catalog', component: CatalogComponent, title: 'JRS | Components' },
  { path: 'cart', component: CartComponent, title: 'JRS | Cart' },
  { path: 'sign-in', component: SignInComponent, title: 'JRS | Sign In' },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
