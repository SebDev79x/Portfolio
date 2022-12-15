import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-techno-card',
  templateUrl: './techno-card.component.html',
  styleUrls: ['./techno-card.component.scss']
})
export class TechnoCardComponent implements OnInit {
  @Input()
  public isActive!: boolean;
  @Input()
  public data!: any | null | undefined;

  ngOnInit(): void {
  }

}
