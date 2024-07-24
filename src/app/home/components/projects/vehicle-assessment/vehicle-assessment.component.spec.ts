import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleAssessmentComponent } from './vehicle-assessment.component';

describe('VehicleAssessmentComponent', () => {
  let component: VehicleAssessmentComponent;
  let fixture: ComponentFixture<VehicleAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleAssessmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
