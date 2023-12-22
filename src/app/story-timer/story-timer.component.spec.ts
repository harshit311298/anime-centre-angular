import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryTimerComponent } from './story-timer.component';

describe('StoryTimerComponent', () => {
  let component: StoryTimerComponent;
  let fixture: ComponentFixture<StoryTimerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoryTimerComponent]
    });
    fixture = TestBed.createComponent(StoryTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
