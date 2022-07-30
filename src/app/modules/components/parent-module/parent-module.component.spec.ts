import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentModuleComponent } from './parent-module.component';

describe('ParentModuleComponent', () => {
  let component: ParentModuleComponent;
  let fixture: ComponentFixture<ParentModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentModuleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ParentModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
