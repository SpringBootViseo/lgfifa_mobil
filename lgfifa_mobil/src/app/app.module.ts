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
import { TrackDeliveryComponent } from './track-delivery/track-delivery.component';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app'
import { environment } from 'src/environments/environment';
import { connectAuthEmulator, FacebookAuthProvider, getAuth, GoogleAuthProvider, provideAuth } from '@angular/fire/auth';
import { AuthenticationService } from './service/authentication.service';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    HomeComponent,
    FilteredProductComponent,
    FavoritesComponent,
    PaymentOptionComponent,
    PaymentDetailComponent,
    CartComponent,
    TrackDeliveryComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => {
      let auth = getAuth()
      if (environment.useEmulators) {
        connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: false })
      }
      return auth
    })
  ],
  providers: [
    GoogleAuthProvider,
    FacebookAuthProvider,
    AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
