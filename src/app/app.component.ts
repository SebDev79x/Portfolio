import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IToggle } from './_interfaces/itoggle';
import { CheckScreenSizeService } from './_services/check-screen-size.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isSNCollapsed = false;
  public screenWidth = 0;
  public size = '';
  public width = 0;
  public isSmallDevice = false;

constructor(private css: CheckScreenSizeService){
 this.css.resize$.subscribe((data)=>{
  this.size = data.size
  this.width= data.width
 }
 )


}
  onToggleSN(data: IToggle): void {
    this.isSNCollapsed = data.collapsed
    this.screenWidth = data.screenWidth
  }

}
