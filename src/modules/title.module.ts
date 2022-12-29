import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* import { TitleComponent } from 'src/app/shared/title/title.component';
 */import { TitleComponent } from '../app/shared/title/title.component';



@NgModule({
  declarations: [
    TitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitleComponent
  ]
})
export class TitleModule { }
