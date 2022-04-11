import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from 'src/app/shared/auth/auth';
@Component({
  selector: 'app-auto-login',
  templateUrl: './auto-login.component.html',
  styleUrls: ['./auto-login.component.css'],
})
export class AutoLoginComponent implements OnInit {
  private _token: string;
  constructor(private _oAuthService: OAuthService) {}

  ngOnInit(): void {
    this._oAuthService.configure(authCodeFlowConfig);
    this._oAuthService.loadDiscoveryDocumentAndTryLogin();
    console.log(this._oAuthService);

    // this._oAuthService.configure(authCodeFlowConfig);
    this._oAuthService.loadDiscoveryDocumentAndTryLogin().then(e=>{
      console.log(e)
    })
    this.getToken();
  }

  public async getToken() {
    this._token= this._oAuthService.getAccessToken();
    console.log(this._token)
  }
}
