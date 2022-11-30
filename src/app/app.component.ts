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
  isSNCollapsed = false;
  screenWidth = 0;
  size = '';
  width = 0;
  isSmallDevice = false;

constructor(private checkScreenSize: CheckScreenSizeService){
 this.checkScreenSize.resize$.subscribe((data)=>{
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
