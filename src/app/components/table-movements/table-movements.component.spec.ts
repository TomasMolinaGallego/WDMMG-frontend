import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMovementsComponent } from './table-movements.component';

describe('TableMovementsComponent', () => {
  let component: TableMovementsComponent;
  let fixture: ComponentFixture<TableMovementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableMovementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableMovementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
