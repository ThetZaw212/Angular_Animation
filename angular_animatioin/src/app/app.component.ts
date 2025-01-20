import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, HostListener, AfterViewInit } from '@angular/core';
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
      transition('* => rotate', [animate('0.3s ease-out')]),
    ]),
    trigger('blurHeader', [
      state('clear', style({ filter: 'blur(0px)', opacity: 1 })),
      state('blur', style({ filter: 'blur(10px)', opacity: 0 })),
      transition('clear <=> blur', animate('0.4s ease-in-out')),
    ]),
    trigger('slideInCard', [
      state('hidden', style({ transform: 'translateY(100%)', opacity: 0 })),
      state('visible', style({ transform: 'translateY(0)', opacity: 1 })),
      transition('hidden => visible', [animate('0.5s ease-out')]),
      transition('visible => hidden', [animate('0.5s ease-in')]),
    ]),
    trigger('hoverPop', [
      state('normal', style({ transform: 'scale(1)' })),
      state('popped', style({ transform: 'scale(1.03)' })),
      transition('normal <=> popped', animate('0.5s ease-in-out')),
    ]),
  ],
})
export class AppComponent implements AfterViewInit {
  rotation = 0;
  lastScrollTop = 0;
  blurState = 'clear';
  cardState = 'hidden';
  cardHoverState = 'normal';
  cardHoverStates: { [key: number]: string } = {};

  constructor() { }

  ngAfterViewInit(): void {
    // Ensure animations start from a defined state after the view is initialized
    setTimeout(() => {
      this.cardState = 'hidden'; // Ensure the card starts hidden
      this.blurState = 'clear'; // Ensure header starts clear
    }, 0);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const delta = scrollTop - this.lastScrollTop;

    if (delta > 0) {
      // Scrolling down: rotate right
      this.rotation += 3;
    } else if (delta < 0) {
      // Scrolling up: rotate left
      this.rotation -= 3;
    }

    this.blurState = scrollTop > 0 ? 'blur' : 'clear';
    this.cardState = scrollTop > 0 ? 'visible' : 'hidden';
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }

  @HostListener('window:beforeunload')
  resetScrollAndRotation(): void {
    window.scrollTo(0, 0);
    this.rotation = 0;
    this.blurState = 'clear';
    this.cardState = 'hidden';
  }

  onCardHover(cardIndex: number): void {
    setTimeout(() => {
      if (this.cardState === 'visible') {
        this.cardHoverStates[cardIndex] = 'popped';
      }
    }, 200);
  }

  onCardLeave(cardIndex: number): void {
    if (this.cardState === 'visible') {
      this.cardHoverStates[cardIndex] = 'normal';
    }
  }
}
