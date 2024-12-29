import { Routes } from '@angular/router';

export const routes: Routes = [
  // Redirección inicial al home
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // Rutas para cargar todos los componentes de forma lazy loading
  { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'dragon-ball', loadComponent: () => import('./pages/dragon-ball/dragon-ball.component').then(m => m.DragonBallComponent) },

  // Ruta para manejar rutas no encontradas
  { path: '**', redirectTo: '/home' },
];
