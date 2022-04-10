import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from 'src/app/shared/auth/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // userForm: FormGroup;
  accessToken

  constructor(
    private fb: FormBuilder,
    private oAuthService: OAuthService
  ) {
    // this.userForm = this.fb.group({
    //   UserName: ['' , Validators.required],
    //   password: ['' , Validators.required],
    // });
  }

  ngOnInit(): void {

  }

  logIn() {
    this.oAuthService.configure(authCodeFlowConfig);
    this.oAuthService.loadDiscoveryDocumentAndTryLogin().then(
      response => {
        console.log(response , 'response')
      }
    );
    this.oAuthService.initCodeFlow();
    this.accessToken = this.oAuthService.getAccessToken();
    console.log(this.accessToken);
    localStorage.setItem('access_token', this.accessToken)
  }
}
