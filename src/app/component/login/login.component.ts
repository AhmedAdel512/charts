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
  inCorrectEmailOrPassword: boolean = false;
  LoginForm: FormGroup;

  users = DB.users;
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
      rememberMe: new FormControl(false),
    });
  }

  ngOnInit() {}
  public show() {
    console.log(this.LoginForm.value);
  }
  onSubmit() {
    let x = this.users.find(user=> user.email === this.LoginForm.value.email && user.Password === this.LoginForm.value.Password);
    if (x) {
      this.checkTokenLocation()
      this.router.navigate(['/home']);
    } else {
      this.inCorrectEmailOrPassword = true;
    }
  }
  public checkTokenLocation(){
    if(this.LoginForm.get('rememberMe').value){
      localStorage.setItem('access_token', '123');
    }else{
      sessionStorage.setItem('access_token', '123');
    }
  }

  logIn() {
    this._authService.login();
  }
}
