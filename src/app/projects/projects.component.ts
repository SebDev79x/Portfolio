import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { allProjects } from '../miscData/projectData'
import { faSuitcase, faGraduationCap, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { CheckScreenSizeService } from '../_services/check-screen-size.service'
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  host: {
    class: "component-height"
  },
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent implements OnInit {
  public slidesPerView!: number;
  public size!: string;
  public width!: number;
  public icons = [faSuitcase];
  public faCircleCheck = faCircleCheck;
  public faGraduationCap = faGraduationCap
  public faSuitcase = faSuitcase;
  public projects = allProjects;

  constructor(private checkScreenSize: CheckScreenSizeService) {

    this.checkScreenSize.resize$.subscribe((data) => {
      this.size = data.size
      this.width = data.width
      const size = this.size;
      switch (size) {
        case 'xs':
        case 'sm':
          case 'md':
          this.slidesPerView = 1
          break;

        case 'lg':
          this.slidesPerView = 2
          break;
        case 'xl':
        case 'xxl':
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
