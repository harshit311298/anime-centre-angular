import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeProfilePictureDialogComponent } from './change-profile-picture-dialog.component';

describe('ChangeProfilePictureDialogComponent', () => {
  let component: ChangeProfilePictureDialogComponent;
  let fixture: ComponentFixture<ChangeProfilePictureDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeProfilePictureDialogComponent]
    });
    fixture = TestBed.createComponent(ChangeProfilePictureDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
