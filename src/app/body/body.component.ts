import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  @Input() collapsed = false;
  @Input() screenWidth = 0;


  getBodyClass(): string {
    let classStyle = ''
    if (this.collapsed && this.screenWidth > 576) {
      classStyle = 'body-trimmed'
    } else if (this.collapsed && this.screenWidth <= 576 && this.screenWidth > 0) {
      classStyle = 'body-xs-screen'

    }
    return classStyle
  }
}

