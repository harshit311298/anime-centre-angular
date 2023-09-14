import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurFeaturesComponent } from './our-features.component';

describe('OurFeaturesComponent', () => {
  let component: OurFeaturesComponent;
  let fixture: ComponentFixture<OurFeaturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurFeaturesComponent]
    });
    fixture = TestBed.createComponent(OurFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
