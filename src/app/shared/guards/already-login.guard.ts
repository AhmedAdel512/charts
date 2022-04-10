import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlreadyLoginGuard implements CanActivate {
  constructor( private _router:Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkAuth();
  }

  public checkAuth(): boolean {
    let token  = localStorage.getItem('access_token');
    if(token){
      this._router.navigate(['/home']);
      return false;
    } else {
      // this._router.navigate(['/login']);
      console.log('value of Token: ', token)
      return true;

    }
  }
  
}
