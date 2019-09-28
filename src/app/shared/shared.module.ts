import { ProductsService } from './services/products.service';
import {ButtonModule} from './button/button.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './components/card/card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ProductTypePipe} from './pipes/product-type.pipe';
import {DescriptionPipe} from './pipes/description.pipe';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AclDirective } from './directives/acl.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
@NgModule({
  declarations: [CardComponent, ProductTypePipe, DescriptionPipe, AclDirective, HighlightDirective, PageNotFoundComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    MatPaginatorModule
  ],
  // providers: [ProductsService],
  exports: [
    CardComponent,
    MatCardModule, MatButtonModule,
    MatSliderModule, MatProgressSpinnerModule, FlexLayoutModule, ProductTypePipe, DescriptionPipe, MatPaginatorModule,
    MatSnackBarModule,
    AclDirective,
    HighlightDirective,
    PageNotFoundComponent
  ]
})
export class SharedModule {}
