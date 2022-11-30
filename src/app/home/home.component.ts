import { Component, OnInit } from '@angular/core';
import { faSmileBeam } from '@fortawesome/free-regular-svg-icons';

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
  public smileyIcon = faSmileBeam;
  ngOnInit(): void {
  }

}
