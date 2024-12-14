import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../shared/header/header.component';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-subscribe', 
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss'], 
  standalone: true, // Indicates that this component can be used independently
  imports: [IonContent, HeaderComponent, FormsModule, ReactiveFormsModule, CommonModule], 
})
export class SubscribeComponent implements OnInit {
  
  subscriptionForm: FormGroup;
  
  
  topics: string[] = ['Arabic', 'Islamic', 'English', 'History', 'Sports'];
  
  
  selectedTopics: string[] = [];
  
  
  days: number[] = Array.from({ length: 31 }, (_, i) => i + 1);
  
  
  months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  
  
  years: number[] = Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i);
  
 
  grades: string[] = ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6'];


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

  // Method to handle form submission
  onSubmit() {
    if (this.subscriptionForm.valid) {
      console.log(this.subscriptionForm.value); // Log valid form values
    } else {
      console.log('Form is invalid'); // Log invalid form message
    }
  }

  // Method to toggle topic selection
  toggleTopic(topic: string): void {
    if (this.selectedTopics.includes(topic)) {
      // If topic is already selected, remove it
      this.selectedTopics = this.selectedTopics.filter((t) => t !== topic);
    } else if (this.selectedTopics.length < 3) {
      // Add topic if less than 3 selected
      this.selectedTopics.push(topic);
    }
  }

  // Method to show error if control is invalid and touched
  showError(controlName: string): boolean {
    const control = this.subscriptionForm.get(controlName);
    return !!control?.touched && control?.invalid;
  }

  // Method to retrieve error message for a control
  getError(controlName: string): string {
    const controlErrors = this.subscriptionForm.get(controlName)?.errors;

    if (controlErrors?.['required']) {
      // Error message for required field
      return `${this.formatControlName(controlName)} is required`;
    }

    if (controlErrors?.['email']) {
      // Error message for invalid email
      return `${this.formatControlName(controlName)} is not valid`;
    }

    return ''; // Return empty string if no error
  }

  // format control name for display
  formatControlName(controlName: string): string {
    return controlName.charAt(0).toUpperCase() + controlName.slice(1);
  }

  // Lifecycle hook for component initialization
  ngOnInit() {}
}
