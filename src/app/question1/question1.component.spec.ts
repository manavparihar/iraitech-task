import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question1Component } from './question1.component';

describe('Question1Component', () => {
  let component: Question1Component;
  let fixture: ComponentFixture<Question1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Question1Component]
    });
    fixture = TestBed.createComponent(Question1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
