import { NgModule } from '@angular/core';
import { MatTouchSelectComponent } from './mat-touch-select.component';
import { MatSelectModule, MatDialogModule, MatRadioModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { MatTouchOptionsComponent } from './mat-touch-options/mat-touch-options.component';



@NgModule({
  declarations: [MatTouchSelectComponent, MatTouchOptionsComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatDialogModule,
    MatRadioModule
  ],
  entryComponents: [
    MatTouchOptionsComponent
  ],
  exports: [MatTouchSelectComponent]
})
export class MatTouchSelectModule { }
