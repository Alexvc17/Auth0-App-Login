import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',

})
export class CallbackComponent {

  constructor(private auth: AuthService){}

  ngOnInit() {

    this.auth.handleRedirectCallback();

  }

}
