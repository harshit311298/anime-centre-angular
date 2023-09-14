import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-story-modal',
  templateUrl: './story-modal.component.html',
  styleUrls: ['./story-modal.component.css']
})
export class StoryModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<StoryModalComponent>
  ) { }

  closeModal(): void {
    this.dialogRef.close();
  }
}
