import { Component } from '@angular/core';
@Component({
  selector: 'flip-card-front',
  templateUrl: `
  <div class="flip-card-front">
  <ng-content></ng-content>
  </div>
  `,
  styleUrls: ['./flipcard.component.scss'],
})
export class FlipCardFrontComponent{}
