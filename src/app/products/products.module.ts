import { OrderGuard } from './../shared/guards/order.guard';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import {RouterModule} from '@angular/router';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { CommentComponent } from './products-detail/comment/comment.component';
import { FavoritesComponent } from './products-detail/favorites/favorites.component';



@NgModule({
  declarations: [ProductsComponent, ProductComponent, ProductsDetailComponent, CommentComponent, FavoritesComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: ProductsComponent,
      },
      {
        path: ':id', component: ProductsDetailComponent,
        // canActivateChild: [OrderGuard],
        children: [
          {path: '', redirectTo: 'comments'},
          {path: 'comments', component: CommentComponent},
          {path: 'favorites', component: FavoritesComponent}
        ]
      }
    ])
  ],
  exports: [ProductsComponent]
})
export class ProductsModule { }
