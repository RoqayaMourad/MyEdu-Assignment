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
  imports: [ IonContent, HeaderComponent, FormsModule,
    ReactiveFormsModule, CommonModule],
})
export class SubscribeComponent  implements OnInit {
  subscriptionForm: FormGroup;
  topics: string[] = ['Arabic', 'Islamic', 'English', 'History', 'Sports'];
  selectedTopics: string[] = [];
  days: number[] = Array.from({ length: 31 }, (_, i) => i + 1);
  months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  years: number[] = Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i);
  grades: string[] = [
    'Grade 1',
    'Grade 2',
    'Grade 3',
    'Grade 4',
    'Grade 5',
    'Grade 6',
  ];

  constructor(private fb: FormBuilder) {
    this.subscriptionForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      childName: ['', [Validators.required]],
      birthDay: ['', [Validators.required]],
      birthMonth: ['', [Validators.required]],
      birthYear: ['', [Validators.required]],
      grade: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });
  }


  
  onSubmit() {
    if (this.subscriptionForm.valid) {
      console.log(this.subscriptionForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  toggleTopic(topic: string): void {
    // Check if the topic is already selected
    if (this.selectedTopics.includes(topic)) {
      // Remove the topic from the selected list
      this.selectedTopics = this.selectedTopics.filter((t) => t !== topic);
    } else if (this.selectedTopics.length < 3) {
      // Add the topic to the selected list only if the limit hasn't been reached
      this.selectedTopics.push(topic);
    }
    
  }

  showError(controlName: string): boolean {
    const control = this.subscriptionForm.get(controlName);
    return !!control?.touched && control?.invalid;
  }
  
  getError(controlName: string): string {
    const controlErrors = this.subscriptionForm.get(controlName)?.errors;
  
    if (controlErrors?.['required']) {
      return `${this.formatControlName(controlName)} is required`;
    }
  
    if (controlErrors?.['email']) {
      return `${this.formatControlName(controlName)} is not valid`;
    }
  
    return '';
  }
  
  formatControlName(controlName: string): string {
    // Capitalize the control name or map it to a user-friendly label
    return controlName.charAt(0).toUpperCase() + controlName.slice(1);
  }


  
  ngOnInit() {}

}