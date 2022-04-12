import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveTokenService {


  constructor() { }


  
  saveTokenInLocalStorage(token: string) {
    localStorage.setItem('access_token', token);
  }
}
