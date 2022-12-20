import { Component } from '@angular/core';
import { faSuitcase, faGraduationCap, faCircleCheck, faLaptopHouse } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-flipcard',
  templateUrl: './flipcard.component.html',
  styleUrls: ['./flipcard.component.scss']
})
export class FlipcardComponent {
  toggleProperty = false
  faSuitcase = faSuitcase

  toggle(){
this.toggleProperty = !this.toggleProperty
  }
}
