import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [provideAnimations()],
  animations: [
    trigger('rotateEarth', [state('start', style({ transform: 'rotate(0deg)' })), state('end', style({ transform: 'rotate(360deg)' })), transition('start => end', animate('1s ease-in')), transition('end => start', animate('1s ease-out'))])
  ],
})
export class AppComponent {
  title = 'angular_animation';
  rotationState = 'default';
  scrollPosition = 0;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const newScrollPosition = window.scrollY;
    if (newScrollPosition > this.scrollPosition) {
      // Scrolling down
      this.rotationState = 'rotated';
    } else if (newScrollPosition < this.scrollPosition) {
      // Scrolling up
      this.rotationState = 'default';
    }
    this.scrollPosition = newScrollPosition;
  }

  constructor() { }
}
