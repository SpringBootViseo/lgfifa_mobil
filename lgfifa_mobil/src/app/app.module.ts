import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeComponent } from './home/home.component';
import { FilteredProductComponent } from './filtered-product/filtered-product.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { PaymentOptionComponent } from './payment-option/payment-option.component';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';
import { CartComponent } from './cart/cart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    HomeComponent,
    FilteredProductComponent,
    FavoritesComponent,
    PaymentOptionComponent,
    PaymentDetailComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
