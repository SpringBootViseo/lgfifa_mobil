import { Inject, Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FacebookAuthProvider, getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  auth:Auth;
  constructor(private router: Router) {
    this.auth = getAuth();
  }

  async google_auth() {
    const user = await this.auth.currentUser;
    if (!(user ? true : false)) {
      signInWithPopup(this.auth, new GoogleAuthProvider()).then((user)=>{
        console.log('',user);
        this.router.navigate(['/home']);
      });
    }
    this.router.navigate(['/home'])
  }

  async facebook_auth() {
    const user = await this.auth.currentUser;
    if (!(user ? true : false)) {
      signInWithPopup(this.auth, new FacebookAuthProvider()).then(()=>{
        console.log('',user);
        this.router.navigate(['/home'])
      });
    }
    this.router.navigate(['/home']);
  }
}
