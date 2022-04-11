import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDashboardPageComponent } from './manage-dashboard-page.component';

describe('ManageDashboardPageComponent', () => {
  let component: ManageDashboardPageComponent;
  let fixture: ComponentFixture<ManageDashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageDashboardPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
