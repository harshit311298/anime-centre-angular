// post.component.ts
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  caption: string = '';
  selectedFile: File | null = null;
  selectedFileUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  onFileSelected(event: any) {
    // Access the selected file from the event
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      // Convert the selected file to a safe data URL
      this.selectedFileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(this.selectedFile));
    } else {
      this.selectedFileUrl = null; // Reset the URL if no file is selected
    }  }
  getSelectedFileDataUrl(): string {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(this.selectedFile);
      return reader.result as string;
    }
    return '';
  }
  openFileInput() {
    // Trigger the click event of the file input element when the button is clicked
    document.getElementById('fileInput')?.click();
  }
  clearSelectedFile() {
    // Clear the selected file and URL
    this.selectedFile = null;
    this.selectedFileUrl = null;
  }

  onPost() {
    if (this.selectedFile && this.caption.trim() !== '') {
      // Send the file to your server or cloud storage
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      // Add logic to handle the response and add the post to your feed
      // ...
    }
  }
}
