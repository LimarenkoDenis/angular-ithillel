import { environment } from './../environments/environment';
import { reducers } from './reducers/index';
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
import { HelpComponent } from './help/help.component';
import {RouterModule} from '@angular/router';
import {rotes} from './routes';
import { OrderComponent } from './order/order.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import {StoreModule} from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CounterComponent } from './counter/counter.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    HelpComponent,
    OrderComponent,
    AdminPanelComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    BrowserAnimationsModule,
    SharedModule,
    // ProductsModule,
    // CartModule,
    HttpClientModule,
    RouterModule.forRoot(rotes),
    StoreModule.forRoot(reducers, { runtimeChecks : { }}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [
    ProductsService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true },
    //
  ],
  bootstrap: [AppComponent],
  exports: [HeaderComponent,]
})
export class AppModule { }
