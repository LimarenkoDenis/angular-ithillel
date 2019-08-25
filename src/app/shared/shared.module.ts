import { ButtonModule } from './button/button.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';


@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatSliderModule
  ],
  exports: [
    CardComponent,
    MatCardModule, MatButtonModule, MatSliderModule]
})
export class SharedModule { }
