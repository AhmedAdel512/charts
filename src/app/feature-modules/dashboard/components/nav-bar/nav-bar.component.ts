import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as DB from '../../../../../db';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  currentUser: any = DB.users[0];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onLogout() {
    localStorage.getItem('access_token')
      ? localStorage.removeItem('access_token')
      : sessionStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }
}
