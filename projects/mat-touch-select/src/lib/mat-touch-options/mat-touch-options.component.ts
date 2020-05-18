import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatRadioChange } from '@angular/material';

export interface TouchOptions {
  label: string;
  options: string[];
  selected?: string;
}

@Component({
  selector: 'lib-mat-touch-options',
  templateUrl: './mat-touch-options.component.html',
  styleUrls: ['./mat-touch-options.component.scss']
})
export class MatTouchOptionsComponent {

  constructor(public dialogRef: MatDialogRef<MatTouchOptionsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TouchOptions) { }

  valSelect(change: MatRadioChange) {
    this.dialogRef.close(change.value);
  }

}
