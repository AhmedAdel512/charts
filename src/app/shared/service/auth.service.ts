import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from '../auth/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: any = {}

  constructor(private _oAuthService: OAuthService) { }

  setCurrentUser(user) {
    this.currentUser = user
  }

  getCurrentUser() {
    return this.currentUser
  }
  
  public checkToken() {
    return localStorage.getItem('access_token')
  }

  public async configureAuth() {
    await this._oAuthService.configure(authCodeFlowConfig);
    await this._oAuthService.loadDiscoveryDocumentAndTryLogin();
    this.setToken();
  }

  public logout() {
    this._oAuthService.logOut();
    localStorage.removeItem('access_token');
  }

  public setToken() {
    let token = this._oAuthService.getAccessToken()
    if (token) {
      localStorage.setItem('access_token', token)
    }
  }
  public async login() {
    await this._oAuthService.initCodeFlow();
  }

}
