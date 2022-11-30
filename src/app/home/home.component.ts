import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host:{
    class:"component-height"
  }
})
export class HomeComponent implements OnInit {

  constructor() { }
   textAnim = document.querySelector('.contentJob h1')

  ngOnInit(): void {
  }

}
