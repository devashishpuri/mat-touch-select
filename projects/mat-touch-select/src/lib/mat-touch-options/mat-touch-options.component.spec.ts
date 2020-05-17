import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTouchOptionsComponent } from './mat-touch-options.component';

describe('MatTouchOptionsComponent', () => {
  let component: MatTouchOptionsComponent;
  let fixture: ComponentFixture<MatTouchOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatTouchOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTouchOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
