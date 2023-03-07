import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { getAuth } from '@angular/fire/auth';
import { Auth, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from 'firebase/auth';
import { FirebaseApp } from '@angular/fire/app';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaGuard implements CanActivate {
auth:Auth;
constructor(private fireBaseApp:FirebaseApp, public router: Router){
  this.auth = getAuth();
}

async canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    const user = await this.auth.currentUser;
    const isAuthenticated = user ? true : false;
    if (!isAuthenticated) {
      this.router.navigate(['login']);
    }
    return true;
}

}