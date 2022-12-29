import { Component } from '@angular/core';
@Component({
  selector: 'flipcard-back',
  template: `
  <div class="flipcard-back">
  <ng-content></ng-content>
  </div>
  `,
  styleUrls: ['./flipcard.component.scss'],

})
export class FlipCardBackComponent{}
