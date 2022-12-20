import { Component } from '@angular/core';
@Component({
  selector: 'flip-card-back',
  templateUrl: `
  <div class="flip-card-back">
  <ng-content></ng-content>
  </div>
  `,
  styleUrls: ['./flipcard.component.scss'],
})
export class FlipCardBackComponent{}
