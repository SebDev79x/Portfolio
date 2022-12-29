import { Component, OnInit } from '@angular/core';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-flipcard',
  templateUrl: './flipcard.component.html',
  styleUrls: ['./flipcard.component.scss']
})
export class FlipcardComponent implements OnInit {
  toggleProperty = false
  faArrowRightArrowLeft = faArrowRightArrowLeft
  constructor() {

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
  toggle() {
    this.toggleProperty = !this.toggleProperty
  }
}
