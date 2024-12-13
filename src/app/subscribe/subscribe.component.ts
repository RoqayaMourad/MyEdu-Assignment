import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../shared/header/header.component';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss'],
  standalone: true,
  imports: [ IonContent, HeaderComponent, FormsModule, ReactiveFormsModule, CommonModule ],
})
export class SubscribeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
