import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { MembershipComponent } from './membership/membership.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { OrderComponent } from './order/order.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { CartComponent } from './cart/cart.component';
import { ErrorComponent } from './error/error.component';
import { ProductDetailRouteActivator } from './product-detail/product-detail.route.activator';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'JCC | Home' },
  { path: 'catalog', component: CatalogComponent, title: 'JCC | Components' },
  { path: 'catalog/:filter', component: CatalogComponent, title: 'JCC | Components' },
  { path: 'cart', component: CartComponent, title: 'JCC | Cart' },
  { path: 'membership', component: MembershipComponent, title: 'JCC | Membership' },
  { path: 'contact', component: ContactComponent, title: 'JCC | Contact' },
  { path: 'detail/:id', component: ProductDetailComponent, title: 'JCC | Detail', canActivate: [ProductDetailRouteActivator] },
  { path: 'order', component: OrderComponent, title: 'JCC | Detail' },
  { path: 'confirmation', component: OrderConfirmationComponent, title: 'JCC | Confirmation' },
  { path: '404', component: ErrorComponent, title: 'JCC | Error' },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
