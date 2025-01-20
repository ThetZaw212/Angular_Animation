import {
  animate,
  keyframes,
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
    trigger('rotateEarth', [
      state('rotate', style({ transform: 'rotateZ({{ rotation }}deg)' }), {
        params: { rotation: 0 },
      }),
      transition('* => *', [
        animate('0.2s ease-out'),
      ]),
    ]),
    trigger('blurHeader', [
      state('clear', style({ filter: 'blur(0px)', opacity: 1 })),
      state('blur', style({ filter: 'blur(5px)', opacity: 0 })),
      transition('clear <=> blur', animate('0.5s ease-in-out')),
    ]),
  ],
})
export class AppComponent {
  rotation = 0;
  lastScrollTop = 0;
  blurState = 'clear';

  constructor() { }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const delta = scrollTop - this.lastScrollTop;

    if (delta > 0) {
      // Scrolling down: rotate left
      this.rotation -= 2.5;
    } else if (delta < 0) {
      // Scrolling up: rotate right
      this.rotation += 2.5;
    }

    this.blurState = scrollTop > 0 ? 'blur' : 'clear';
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative scroll values
  }

  @HostListener('window:beforeunload')
  resetScrollAndRotation(): void {
    window.scrollTo(0, 0);
    this.rotation = 0;
    this.blurState = 'clear';
  }
}
