import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipcardComponent } from '../flipcard/flipcard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    FlipcardComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    FlipcardComponent
  ]
})
export class FlipCardModule { }
