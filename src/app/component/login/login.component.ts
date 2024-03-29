import { Component } from '@angular/core';

import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private _authService: AuthService,
  ) {

  }


  logIn() {
    this._authService.login();
  }

}
