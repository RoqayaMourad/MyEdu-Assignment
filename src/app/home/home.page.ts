import { HeaderComponent } from './../shared/header/header.component';
import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ IonContent, HeaderComponent],
})
export class HomePage {
  constructor(private router : Router) {}

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToSubscribe() {
    this.router.navigate(['/subscribe']);
  }
}
