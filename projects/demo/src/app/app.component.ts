import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  touchToggle = false;

  control = new FormControl('', [Validators.required]);

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
}
