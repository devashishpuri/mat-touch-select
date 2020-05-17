import { Component, Input, HostBinding, Optional, Self } from '@angular/core';
import { MatFormFieldControl, MatSelectChange, MatDialog } from '@angular/material';
import { Observable, Subject } from 'rxjs';
import { NgControl } from '@angular/forms';
import { MatTouchOptionsComponent } from './mat-touch-options/mat-touch-options.component';

// export interface MatTouchOption {
//   display: string;
//   value: string;
// }

@Component({
  selector: 'mat-touch-select',
  templateUrl: 'mat-touch-select.component.html',
  styles: [],
  providers: [{ provide: MatFormFieldControl, useExisting: MatTouchSelectComponent }]
})
export class MatTouchSelectComponent implements MatFormFieldControl<string> {

  @Input() options: string[];

  // Mat Form Feild Interface
  stateChanges: Subject<void> = new Subject();
  @HostBinding() id: string;
  @Input() placeholder: string;

  focused: boolean = false;

  get empty() {
    return !this.value;
  }

  @HostBinding('class.floating')
  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }

  private _required: boolean;
  @Input()
  get required() {
    return this._required;
  }
  set required(req) {
    this._required = !!req;
    this.stateChanges.next();
  }

  @Input() disabled: boolean;

  @Input() get errorState() {
    return this.ngControl && this.ngControl.errors !== null && this.ngControl.invalid && this.ngControl.dirty;
  }

  controlType = 'mat-touch-select';

  autofilled?: boolean;

  private _value: string;
  @Input()
  get value() {
    return this._value;
  }
  set value(val: string | null) {
    this._value = val;
    this.stateChanges.next();
  }

  @HostBinding('attr.aria-describedby') describedBy = '';
  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(event: MouseEvent): void {
    // throw new Error("Method not implemented.");
    // console.log('Container Clicked');
    this.showTouchOptions();
  }

  @Input() touchUi = false;

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    public dialog: MatDialog
  ) { }

  setMatVal(val: MatSelectChange) {
    this.value = val.value;
  }

  showTouchOptions(): void {
    const dialogRef = this.dialog.open(MatTouchOptionsComponent);

    dialogRef.afterClosed()
      .subscribe(result => {
        console.log('Option Chosen', result);
      });
  }

}
