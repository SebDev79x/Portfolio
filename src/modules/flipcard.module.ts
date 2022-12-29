import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipcardComponent } from '../app/shared/flipcard/flipcard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlipCardBackComponent } from 'src/app/shared/flipcard/flipcard-back';
import { FlipCardFrontComponent } from 'src/app/shared/flipcard/flipcard-front';



@NgModule({
  declarations: [
    FlipcardComponent,
    FlipCardBackComponent,
    FlipCardFrontComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    FlipcardComponent,
    FlipCardBackComponent,
    FlipCardFrontComponent
  ]
})
export class FlipCardModule { }
