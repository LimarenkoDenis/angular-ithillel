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
@NgModule({
  declarations: [CardComponent, ProductTypePipe, DescriptionPipe],
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
    MatSnackBarModule]
})
export class SharedModule {}
