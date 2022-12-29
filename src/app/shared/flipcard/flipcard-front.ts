import { Component } from '@angular/core';
@Component({
  selector: 'flipcard-front',
  template: `
  <div class="flipcard-front">
  <ng-content></ng-content>
  </div>
  `,
  styleUrls: ['./flipcard.component.scss'],
})
export class FlipCardFrontComponent{}
