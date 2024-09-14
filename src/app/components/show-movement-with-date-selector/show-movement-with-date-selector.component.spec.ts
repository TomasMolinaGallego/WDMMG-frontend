import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMovementWithDateSelectorComponent } from './show-movement-with-date-selector.component';

describe('ShowMovementWithDateSelectorComponent', () => {
  let component: ShowMovementWithDateSelectorComponent;
  let fixture: ComponentFixture<ShowMovementWithDateSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMovementWithDateSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMovementWithDateSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
