import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { PreviewDialogComponent } from './preview-dialog.component'; // Import the PreviewDialogComponent

@Component({
  selector: 'app-change-profile-picture-dialog',
  templateUrl: './change-profile-picture-dialog.component.html',
  styleUrls: ['./change-profile-picture-dialog.component.css'],
})
export class ChangeProfilePictureDialogComponent {
  selectedFile: File | null = null;
  croppedImageBlob: Blob | null = null;
  croppedImageObjectUrl: SafeUrl | null = null;

  constructor(
    public dialogRef: MatDialogRef<ChangeProfilePictureDialogComponent>,
    private sanitizer: DomSanitizer,
    private dialog: MatDialog // Inject MatDialog
  ) {}

  imageChangedEvent: any = '';

  onFileSelected(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent): void {
    if (event.blob) {
      this.croppedImageBlob = event.blob;
      this.croppedImageObjectUrl = this.sanitizer.bypassSecurityTrustUrl(
        URL.createObjectURL(this.croppedImageBlob)
      );
    }
  }

  uploadProfilePicture(): void {
    if (this.croppedImageBlob) {
      // Upload the cropped image (this.croppedImageBlob) to your server or perform other actions
      console.log('Uploading profile picture:', this.croppedImageBlob);
    } else {
      console.log('No image selected.');
    }
  }

  openPreviewDialog(): void {
    if (this.croppedImageObjectUrl) {
      this.dialog.open(PreviewDialogComponent, {
        data: { imageUrl: this.croppedImageObjectUrl },
      });
    }
  }
}
