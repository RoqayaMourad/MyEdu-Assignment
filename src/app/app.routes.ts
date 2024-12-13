import { Routes } from '@angular/router';
import { SubscribeComponent } from './subscribe/subscribe.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  { path: 'subscribe', component: SubscribeComponent },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
