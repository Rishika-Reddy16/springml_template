import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsNavComponent } from './reports-nav.component';

describe('ReportsNavComponent', () => {
  let component: ReportsNavComponent;
  let fixture: ComponentFixture<ReportsNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
