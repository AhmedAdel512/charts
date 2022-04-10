import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { BehaviorSubject } from 'rxjs';
import { authCodeFlowConfig } from './shared/auth/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'authentication-task';
  a: any;

  public currentStatus: string = '';
  public tokenStatus = 'not working';
  public accessToken: string = '';
  public idToken: string = '';
  constructor(
    private oAuthService: OAuthService,
    private http: HttpClient,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.configureSSO();
    // this.getToken()
  }
  configureSSO() {
    this.oAuthService.configure(authCodeFlowConfig);
    // this.oAuthService.tokenValidationHandler = new JwksValidationHandler()
    this.oAuthService.loadDiscoveryDocumentAndTryLogin();
    // this.listenToEvents();
    this.oAuthService.setupAutomaticSilentRefresh();
    // .then(
    //   response => {
    //     console.log(response)
    //     this.oAuthService.initCodeFlow()
    //     this.token = response.info.discoveryDocument.token_endpoint
    //     this.getTokens()
    //   }
    // )
  }

  getToken() {
    // this.accessToken = this.oAuthService.getAccessToken();
    // this.idToken = this.oAuthService.getIdToken();
    if (this.accessToken) {
      this.tokenStatus = 'Token is Working';
    }
    // console.log(this.oAuthService.getAccessToken());
    console.log(this.oAuthService.hasValidAccessToken() , 'hasValidAccessToken');
    console.log(this.oAuthService.loadUserProfile() , 'loadUserProfile');
    // console.log(this.oAuthService.getIdToken());
    console.log(this.oAuthService.getIdTokenExpiration());
  }

  listenToEvents() {
    this.oAuthService.events.subscribe((e) => {
      console.log(e);
      console.log(e.type);
      if (e.type === 'token_expires') {
        this.tokenStatus = 'Token Expired';
      }
      else if (e.type === 'token_refreshed') {
        this.tokenStatus = 'token_refreshed';
      }
    });
  }

  refreshMyToken() {
    this.oAuthService.silentRefresh().then((res) => {
      console.log(res);
      this.tokenStatus = 'Token is refreshed';
    });
  }

  callAuthorizedSSAEndPoint() {
    this.http
      .get('https://192.168.54.200:2040/api/Auth/GetMyOrganization', {
        headers: {
          authorization: `Bearer ${this.oAuthService.getAccessToken()}`,
          accept: 'application/json',
          'tenant-key': 'flairstech',
        },
      })
      .subscribe(
        (response) => {
          console.log(response, 'response');
          console.log(this.oAuthService.loadUserProfile(), 'loadUserProfile');
          this.currentStatus = 'your token is valid to access this api'
        },
        (error) => {
          console.log(error, 'error');
          if (error.status === 401) {
            this.currentStatus = 'your token is not valid to access this api'
          }
        }
      );
  }

  logIn() {
    this.oAuthService.initCodeFlow();
    // this.authenticationService.authenticateToken();
    console.log(this.oAuthService.events.subscribe((e) => console.log(e)));
    // localStorage.setItem('access token' ,this.accessToken)
    // localStorage.setItem('id token' ,this.idToken)
    // this.router.navigate(['home'])
  }

  logOut() {
    this.oAuthService.logOut();
    // this.authenticationService.unauthenticateToken();
    // localStorage.removeItem('access token')
    // localStorage.removeItem('id token')
  }
}
