import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: 'https://stsstaging.flairstech.com/tenants/flairstech',

  // URL of the SPA to redirect the user to after login
  postLogoutRedirectUri: 'http://localhost:4200/login',
  silentRefreshRedirectUri: 'http://localhost:4200/',
  useSilentRefresh: false,
  oidc: true,
  requireHttps: 'remoteOnly',
  sessionChecksEnabled: false,
  clearHashAfterLogin: false,
  nonceStateSeparator: 'semicolon',
  redirectUri: 'http://localhost:4200/home',
  // The SPA's id. The SPA is registerd with this id at the auth-server
  // clientId: 'server.code',
  clientId: 'POC_Authentication',

  // Just needed if your auth server demands a secret. In general, this
  // is a sign that the auth server is not configured with SPAs in mind
  // and it might not enforce further best practices vital for security
  // such applications.
  // dummyClientSecret: 'secret',

  responseType: 'code',

  // set the scope for the permissions the client should request
  // The first four are defined by OIDC.
  // Important: Request offline_access to get a refresh token
  // The api scope is a usecase specific one
  scope: 'openid profile offline_access flairs_tracker_api flairs_identity_api flairs_clients_app_api_flairstech',

  showDebugInformation: true,
};
