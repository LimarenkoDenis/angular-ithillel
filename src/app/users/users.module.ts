import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';

import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [UserListComponent, UserCardComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule
  ],
  exports: [UserListComponent]
})
export class UsersModule { }
