import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitMovementComponent } from './submit-movement.component';

describe('SubmitMovementComponent', () => {
  let component: SubmitMovementComponent;
  let fixture: ComponentFixture<SubmitMovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitMovementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitMovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
