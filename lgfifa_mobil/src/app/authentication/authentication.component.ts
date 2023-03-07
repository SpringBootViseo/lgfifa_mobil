import { Component } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
  constructor(
    private authService: AuthenticationService
) {}

    public authWithGoogle(){
      this.authService.google_auth();
    }

    public authWithFacebook(){
      this.authService.facebook_auth();
    }
}
