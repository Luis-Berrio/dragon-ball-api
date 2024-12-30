import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {  Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('cardAnimation', [
      state('in', style({ transform: 'scale(1)' })),
      state('hovered', style({ transform: 'scale(1.05)' })),
      transition('in <=> hovered', animate('300ms ease-in-out')),
    ]),
  ],
})
export class HomeComponent {
  constructor(private router: Router) {}


  navigateTo(api: string): void {
    if (api === 'dragon-ball') {
      this.router.navigate(['/dragon-ball']); // Navegación interna en Angular
    } else if (api === 'rick-and-morty') {
      window.location.href = 'http://localhost:5173'; // Redirige a React
    }
  }
}
