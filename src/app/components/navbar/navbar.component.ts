import { Component, Inject} from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',


  styles: [
  ]
})
export class NavbarComponent {

  constructor(
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService
  ){}

  login() {
    this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout({
      logoutParams: {
        returnTo: this.document.location.origin
      }
    });
  }


}
