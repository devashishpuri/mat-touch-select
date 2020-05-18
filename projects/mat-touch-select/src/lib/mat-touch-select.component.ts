import { Component, Input, HostBinding, Optional, Self, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatFormFieldControl, MatSelectChange, MatDialog, MatSelect } from '@angular/material';
import { Observable, Subject, Subscription } from 'rxjs';
import { NgControl, ControlValueAccessor } from '@angular/forms';
import { MatTouchOptionsComponent, TouchOptions } from './mat-touch-options/mat-touch-options.component';
import { OverlayContainer } from '@angular/cdk/overlay';

// export interface MatTouchOption {
//   display: string;
//   value: string;
// }

@Component({
  selector: 'mat-touch-select',
  templateUrl: 'mat-touch-select.component.html',
  styles: [`.pane { display: none; }`],
  providers: [{ provide: MatFormFieldControl, useExisting: MatTouchSelectComponent }]
})
export class MatTouchSelectComponent implements MatFormFieldControl<string>, AfterViewInit, ControlValueAccessor {

  @ViewChild('select', { static: false }) select: MatSelect;
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

  @Input() touchUi = false;
  selectChangeSubscription: Subscription;
  isPanelOpen = false;


  registerOnChange = (_: any) => { };
  registerOnTouched = (_: any) => { };

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    public dialog: MatDialog,
    public overlayContainer: OverlayContainer
  ) {
    this.ngControl.valueAccessor = this;
  }

  writeValue(val: string): void {
    this.value = val;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngAfterViewInit() {
    if (this.ngControl) {
      console.log('The Control', this.ngControl.control);
      this.select.ngControl = this.ngControl;
    }
  }

  onContainerClick(_: MouseEvent): void {
    if (this.touchUi) {
      this.overlayContainer.getContainerElement().style.display = 'none';
      this.select.close();

      if (!this.selectChangeSubscription) {
        this.selectChangeSubscription = this.select.openedChange
          .subscribe((isSelectOpened: boolean) => {
            if (!this.disabled && !isSelectOpened && !this.isPanelOpen) {
              this.isPanelOpen = true;
              this.overlayContainer.getContainerElement().style.display = 'unset';
              this.showTouchOptions();
            }
          });
      }
    } else {
      if (this.selectChangeSubscription) {
        this.selectChangeSubscription.unsubscribe();
        this.selectChangeSubscription = null;
      }
    }
  }

  setMatVal(val: MatSelectChange) {
    this.value = val.value;
    if (this.ngControl) {
      this.ngControl.control.setValue(this.value);
    }
  }

  showTouchOptions(): void {
    const dialogRef = this.dialog.open(MatTouchOptionsComponent, {
      autoFocus: false,
      data: {
        label: this.placeholder,
        options: this.options,
        selected: this.value
      } as TouchOptions
    });

    dialogRef.afterClosed()
      .subscribe(result => {
        this.isPanelOpen = false;
        this.select.disabled = false;
        this.value = result || this.value;
        if (this.ngControl) {
          this.ngControl.control.setValue(this.value);
        }
      });
  }

}
