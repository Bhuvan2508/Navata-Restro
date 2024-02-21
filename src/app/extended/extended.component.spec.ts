import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedComponent } from './extended.component';

describe('ExtendedComponent', () => {
  let component: ExtendedComponent;
  let fixture: ComponentFixture<ExtendedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtendedComponent]
    });
    fixture = TestBed.createComponent(ExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
