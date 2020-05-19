# MatTouchSelect
Material Select with TouchUI for Mobile Devices like DatePicker.

## Installation
```bash
npm i mat-touch-select --save
```

## Usage
```html
<mat-form-field appearance="outline">
    <mat-label>App timer</mat-label>
    <!-- Our Touch Optimised Form Control -->
    <mat-touch-select [options]='options' [formControl]='control' [touchUi]='touchToggle' [errorStateMatcher]="matcher">
    </mat-touch-select>
    <mat-error>
        App Timer is <strong>required</strong>
    </mat-error>
</mat-form-field>
```

For now, only String array is supported as options and string output is recieved.

## Project Progress

1. ☑ Create Touch Ui
2. ☑ Support Material Form Feild
3. ☑ Support Error State Matcher
4. ☐ Support multiple select features
5. ☐ Support Different Select and Display value
6. ☐ Support Select Interface properties and methods
