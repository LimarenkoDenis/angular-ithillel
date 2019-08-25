import { ButtonModule } from './../shared/button/button.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  declarations: [UserListComponent, UserCardComponent],
  imports: [
    CommonModule,
    SharedModule,
    ButtonModule
  ],
  exports: [UserListComponent, UserCardComponent]
})
export class UsersModule { }
