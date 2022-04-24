import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';


import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { NgChartsModule } from 'ng2-charts';
import { AutoLoginComponent } from './component/auto-login/auto-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AutoLoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgChartsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatCheckboxModule,
    OAuthModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
