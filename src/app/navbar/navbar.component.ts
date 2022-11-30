import { Component, OnInit } from '@angular/core';
import { IMenu } from '../_interfaces/imenu';

import { allMenuLinks } from '../miscData/menuData';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  allMenuLinks: IMenu[] = allMenuLinks;

  constructor() { }

  ngOnInit(): void {
  }

}
