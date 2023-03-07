import { NgModule } from '@angular/core';
import { FirebaseApp, FirebaseAppModule, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { connectAuthEmulator, FacebookAuthProvider, getAuth, GoogleAuthProvider, provideAuth } from '@angular/fire/auth';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthenticationComponent } from './authentication/authentication.component';
import { CartComponent } from './cart/cart.component';
import { FilteredProductComponent } from './filtered-product/filtered-product.component';
import { SocialMediaGuard } from './guards/social-media.guard';
import { HomeComponent } from './home/home.component';
import { AuthenticationService } from './service/authentication.service';
import { TrackDeliveryComponent } from './track-delivery/track-delivery.component';

export const routes: Routes = [

  { path: 'login', component: AuthenticationComponent ,pathMatch: 'full'},
  { path: 'home', component: HomeComponent, canActivate: [SocialMediaGuard] },
  { path: 'track', component: TrackDeliveryComponent, canActivate: [SocialMediaGuard] },
  { path: 'listing', component: FilteredProductComponent, canActivate: [SocialMediaGuard] },
  { path: 'cart', component: CartComponent, canActivate: [SocialMediaGuard] },
  { path: '', redirectTo: 'home' , pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    FirebaseAppModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => {
      let auth = getAuth()
      if (environment.useEmulators) {
        connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: false })
      }
      return auth
    })
  ],
  bootstrap: [HomeComponent],
  providers: [
    GoogleAuthProvider,
    FacebookAuthProvider,
    AuthenticationService],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
