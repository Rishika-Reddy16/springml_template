import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsNav1Component } from './reports-nav1.component';

describe('ReportsNav1Component', () => {
  let component: ReportsNav1Component;
  let fixture: ComponentFixture<ReportsNav1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsNav1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsNav1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
