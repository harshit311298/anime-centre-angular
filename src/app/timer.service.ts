// app/timer.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  private timer$: Observable<number>;
  private timerSubject: BehaviorSubject<number>;

  constructor() {
    this.timerSubject = new BehaviorSubject<number>(0);
    this.timer$ = timer(0, 1000); // Emits a value every second

    this.timer$.subscribe((seconds) => {
      this.timerSubject.next(seconds);
    });
  }

  getTimer(): Observable<number> {
    return this.timerSubject.asObservable();
  }

  resetTimer() {
    this.timerSubject.next(10); // Reset the timer to 10 seconds
  }
}
