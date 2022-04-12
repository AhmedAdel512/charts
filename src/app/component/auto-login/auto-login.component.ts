import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../shared/service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auto-login',
  templateUrl: './auto-login.component.html',
  styleUrls: ['./auto-login.component.css'],
})
export class AutoLoginComponent implements OnInit {
  constructor(private _oAuthService: AuthService, private _router:Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      if(this._oAuthService.checkToken()) {
        this._router.navigate(['home'])
      }else{
        this._router.navigate(['login'])
      }
    }, 1000);
  }


}
