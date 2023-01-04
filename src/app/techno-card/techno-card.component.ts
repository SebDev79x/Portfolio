import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ITechno } from '../_interfaces/itechno';

@Component({
  selector: 'app-techno-card',
  templateUrl: './techno-card.component.html',
  styleUrls: ['./techno-card.component.scss']
})
export class TechnoCardComponent implements OnInit {
  @Input()
  public isActive!: boolean;
  @Input()
  public data!: any;

  ngOnInit(): void {
/* const {transformedData} = this.data
console.log("transformedData",transformedData); */
/* console.log("data",this.data);
 */
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("data",this.data);

  }

}
