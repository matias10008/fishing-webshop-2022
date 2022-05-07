import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodsComponent } from './rods.component';

describe('RodsComponent', () => {
  let component: RodsComponent;
  let fixture: ComponentFixture<RodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
