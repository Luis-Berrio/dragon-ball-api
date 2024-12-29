import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { animate, style, transition, trigger, state } from '@angular/animations';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatRippleModule, MatIconModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  animations:
  [
    trigger('cardAnimation', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(20px)'
        }),
        animate('600ms cubic-bezier(0.4, 0, 0.2, 1)',
          style({
            opacity: 1,
            transform: 'translateY(0)'
          }))
      ])
    ]),
    trigger('powerBadge', [
      state('normal', style({
        transform: 'translateX(0)',
      })),
      state('hovered', style({
        transform: 'translateX(-4px)',
      })),
      transition('normal <=> hovered', [
        animate('300ms cubic-bezier(0.4, 0, 0.2, 1)')
      ])
    ]),
    trigger('infoAnimation', [
      state('normal', style({
        transform: 'translateY(0)',
      })),
      state('hovered', style({
        transform: 'translateY(-80px)',
        opacity: 0
      })),
      transition('normal <=> hovered', [
        animate('300ms cubic-bezier(0.4, 0, 0.2, 1)')
      ])
    ]),
    trigger('hoverContent', [
      state('normal', style({
        transform: 'translateY(100%)',
      })),
      state('hovered', style({
        transform: 'translateY(0)',
      })),
      transition('normal <=> hovered', [
        animate('300ms cubic-bezier(0.4, 0, 0.2, 1)')
      ])
    ])
  ]
})
export class CardComponent {
  @Input() character: any;
  @Output() cardClick = new EventEmitter<any>();

  isHovered = false;
  onCardClick() {
    this.cardClick.emit(this.character);
  }
}
