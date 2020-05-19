import { Component } from '@angular/core';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  touchToggle = false;

  disabled = false;

  control = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();

  options = [
    'No limit',
    '15 minutes',
    '30 minutes',
    '1 hour',
    'Custom Limit',
    'Pause App'
  ];

  constructor() {
    this.control.valueChanges.subscribe(val => {
      console.log(val);
    });
  }

  toggleDisable() {
    this.disabled = !this.disabled;
    this.disabled ? this.control.disable() : this.control.enable();
  }
}
