import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { OrderGuard } from './shared/guards/order.guard';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { OrderComponent } from './order/order.component';
import {Routes} from '@angular/router';

import {AboutComponent} from './about/about.component';

import {HelpComponent} from './help/help.component';
import {ProductsModule} from './products/products.module';

export const rotes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full'},
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then((mod: any) => mod.ProductsModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then((mod) => mod.CartModule)
  },
  { path: 'about', component: AboutComponent},
  { path: 'help', component: HelpComponent},
  {path: 'order', component: OrderComponent, canActivate: [OrderGuard]},
  {path: 'admin', component: AdminPanelComponent},
  { path: '**', component: PageNotFoundComponent }
];
