import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from 'src/app/shared/auth/auth';
import { SaveTokenService } from 'src/app/shared/service/save-token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // userForm: FormGroup;
  accessToken

  constructor(
    private saveToken: SaveTokenService,
    private oAuthService: OAuthService
  ) {
    // this.userForm = this.fb.group({
    //   UserName: ['' , Validators.required],
    //   password: ['' , Validators.required],
    // });
  }

  ngOnInit(): void {
    this.configureSSO()
  }

  configureSSO() {
    this.oAuthService.configure(authCodeFlowConfig);
    this.oAuthService.loadDiscoveryDocumentAndTryLogin();
    console.log('in configureSSO')
  }

  logIn() {
    this.oAuthService.configure(authCodeFlowConfig);
    this.oAuthService.loadDiscoveryDocumentAndTryLogin();
    this.oAuthService.initCodeFlow()
    this.saveToken.saveTokenInLocalStorage(this.oAuthService.getAccessToken())
  }
}
