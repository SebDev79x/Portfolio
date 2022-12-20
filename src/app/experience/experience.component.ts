import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { xp } from '../miscData/xpData'
import { faSuitcase, faGraduationCap, faCircleCheck, faLaptopHouse } from '@fortawesome/free-solid-svg-icons'
import { CheckScreenSizeService } from '../_services/check-screen-size.service'
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExperienceComponent implements OnInit {
  public slidesPerView!: number;
  public size!: string;
  public width!: number;
  public xpData = xp;
  public icons = [faSuitcase];
  public faCircleCheck = faCircleCheck;
  public faGraduationCap = faGraduationCap
  public faSuitcase = faSuitcase;

  constructor(private checkScreenSize: CheckScreenSizeService) {
    this.checkScreenSize.resize$.subscribe((data) => {
      this.size = data.size
      this.width = data.width
      const size = this.size;
      switch (size) {
        case ('xs' || 'sm' || 'md'):
          this.slidesPerView = 1
          break;
        case 'lg':
          this.slidesPerView = 2
          break;
        case ('xl' || 'xxl'):
          this.slidesPerView = 3
          break;
        default:
          this.slidesPerView = 1
      }
    })
  }
  ngOnInit(): void {
  }
}
