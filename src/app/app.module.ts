import { AuthService } from './shared/services/auth.service';
import { ProductsService } from './shared/services/products.service';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {SharedModule} from './shared/shared.module';

// import { ButtonModule } from './shared/button/button.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    BrowserAnimationsModule,
    SharedModule,
    ProductsModule,
    CartModule,
    HttpClientModule
  ],
  providers: [
    ProductsService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true },
    //
  ],
  bootstrap: [AppComponent],
  exports: [HeaderComponent]
})
export class AppModule { }
