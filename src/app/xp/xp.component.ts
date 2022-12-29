import { Component, Input, OnInit } from '@angular/core';
import { xp } from '../miscData/xpData'
import { faSuitcase, faGraduationCap, faCircleCheck } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-xp',
  templateUrl: './xp.component.html',
  styleUrls: ['./xp.component.scss'],
  host: {
    class: "component-height"
  }
})
export class XpComponent implements OnInit {
  @Input() name!:string;
public xpData = xp;
public icons = [faSuitcase];
public faCircleCheck = faCircleCheck;
public faGraduationCap = faGraduationCap
public faSuitcase = faSuitcase;

  constructor() { }

  ngOnInit(): void {

  }

}
