import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InoutsComponent } from './inouts.component';

describe('InoutsComponent', () => {
  let component: InoutsComponent;
  let fixture: ComponentFixture<InoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InoutsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
