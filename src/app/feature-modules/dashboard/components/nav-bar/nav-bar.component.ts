import { Component, OnInit } from '@angular/core';
import * as DB from '../../../../../db';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  currentUser: any = DB.users[0]

  constructor() { }

  ngOnInit(): void {
  }

}
