import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-preview-dialog',
  template: `
    <h2>Preview</h2>
    <img [src]="data.imageUrl" alt="Preview" style="max-width: 100%; max-height: 300px;">
    <button mat-button (click)="closeDialog()">Close</button>
  `,
})
export class PreviewDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<PreviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { imageUrl: string }
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
