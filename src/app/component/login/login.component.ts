import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/shared/service/auth.service';
import * as DB from '../../../db';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;

  users = DB.users
  constructor(private _authService: AuthService, private router: Router) {
    this.LoginForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
      ]),
      Password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.users.find((user) => {
      console.log(user);
      console.log(
        user.email === this.LoginForm.value.email,
        this.LoginForm.value.email
      );
      console.log(
        user.Password === this.LoginForm.value.Password,
        this.LoginForm.value.Password
      );
      if (
        user.email === this.LoginForm.value.email &&
        user.Password === this.LoginForm.value.Password
      ) {
        console.log('in if condition')
        this._authService.setCurrentUser({ ...user });
        localStorage.setItem('access_token', '123')
        this.router.navigate(['/home'])
      }
    });
  }

  logIn() {
    this._authService.login();
  }
}
