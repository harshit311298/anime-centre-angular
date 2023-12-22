import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TimerService } from '../timer.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Router } from '@angular/router'; // Import the Router module

@Component({
  selector: 'app-story-timer',
  templateUrl: './story-timer.component.html',
  styleUrls: ['./story-timer.component.css'],
  animations: [
    trigger('slide', [
      state('start', style({ left: '0%' })),
      state('end', style({ left: '100%' })),
      transition('start => end', [animate('10s')]), // Change to 10s for a 10-second timer
    ]),
  ],
})
export class StoryTimerComponent implements OnInit {
  timer$: Observable<number> | null | undefined;

  slideState = 'start';
  progressBarValue = 0; // Initialize with a default value

  constructor(private timerService: TimerService, private router: Router) {
    this.timer$ = this.timerService?.getTimer();
  }

  ngOnInit() {
    if (this.timer$) {
      this.timer$.subscribe((seconds) => {
        if (seconds !== null && seconds !== undefined) {
          this.progressBarValue = seconds >= 10 ? 100 : (seconds * 100) / 10;
          if (seconds >= 10) {
            this.navigateToNextStoryAfterDelay();
          }
        }
      });
    }
  }

  navigateToNextStoryAfterDelay() {
    setTimeout(() => {
      this.navigateToNextStory();
    }, 10000); // Delay for 10 seconds (10,000 milliseconds)
  }

  navigateToNextStory() {
    // Use the Router to navigate to the next story or the appropriate route
    this.router.navigate(['/']); // Replace with your actual route
  }
}
