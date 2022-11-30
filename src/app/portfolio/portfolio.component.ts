import { Component, OnInit } from '@angular/core';
import { IProject } from '../_interfaces/iproject';
import { allProjects } from '../miscData/projectData';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  host: {
    class: "component-height"
  }
})
export class PortfolioComponent implements OnInit {
public projects:IProject[]=allProjects
  constructor() { }

  ngOnInit(): void {
    console.log("projects",this.projects);

  }

}
