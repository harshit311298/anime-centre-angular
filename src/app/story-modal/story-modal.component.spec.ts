import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryModalComponent } from './story-modal.component';

describe('StoryModalComponent', () => {
  let component: StoryModalComponent;
  let fixture: ComponentFixture<StoryModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoryModalComponent]
    });
    fixture = TestBed.createComponent(StoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
