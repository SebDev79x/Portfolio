import { Component, Input, OnInit } from '@angular/core';
import { CheckRouteService } from '../_services/check-route.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  public currentRoute!: any;

  constructor(private checkRoute: CheckRouteService) {}
  ngOnInit(): void {
    this.checkRoute.getUrl().subscribe((data: any) => {
      this.currentRoute = data.url.replace('/', '').toUpperCase()
    })
  }
  /* GET BODY CLASS */
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

