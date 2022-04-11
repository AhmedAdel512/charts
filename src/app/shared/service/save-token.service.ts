import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveTokenService {


  constructor() { }


  
  saveTokenInLocalStorage(token: string) {
    console.log(token)
    localStorage.setItem('access_token', token);
  }
}
