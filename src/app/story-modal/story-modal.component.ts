import { Component, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StoryTimerComponent } from '../story-timer/story-timer.component'; // Replace with the actual path

@Component({
  selector: 'app-story-modal',
  templateUrl: './story-modal.component.html',
  styleUrls: ['./story-modal.component.css']
})
export class StoryModalComponent implements AfterViewInit {
    @ViewChild(StoryTimerComponent, { static: true }) timerComponent!: StoryTimerComponent;
  
    constructor(
      @Inject(MAT_DIALOG_DATA) public data: any,
      private dialogRef: MatDialogRef<StoryModalComponent>
    ) { }
  
    ngAfterViewInit() {
      if (this.timerComponent) {
        this.timerComponent.timer$?.subscribe((seconds) => {
          if (seconds !== null && seconds !== undefined && seconds >= 10) {
            this.navigateToNextStory();
          }
        });
      }
    }
    
  
    closeModal(): void {
      this.dialogRef.close();
    }
  
    navigateToNextStory() {
      // Implement your logic to navigate to the next story or route
      // You may use this.dialogRef.close() to close the modal and then navigate to the next story.
        // Close the current modal
     this.dialogRef.close();

  // Navigate to the next story or route
  // this.router.navigate(['/next-story']); 
    }
}
