import { Component } from '@angular/core';
@Component({
  selector: 'title',
  template: `<div>
  <ng-content></ng-content>
  </div>
  `,
  styleUrls: ['./title.component.scss'],

})
export class TitleComponent{}
