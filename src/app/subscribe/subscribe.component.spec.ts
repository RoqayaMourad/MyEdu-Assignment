import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SubscribeComponent } from './subscribe.component';

describe('SubscribeComponent', () => {
  let component: SubscribeComponent;
  let fixture: ComponentFixture<SubscribeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SubscribeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // testing form initialization
  it('should initialize the form with empty fields', () => {
    const formValues = component.subscriptionForm.value;
    expect(formValues.name).toBe('');
    expect(formValues.email).toBe('');
    expect(formValues.childName).toBe('');
  });

  // testing form validity
  it('should invalidate the form if required fields are empty', () => {
    component.subscriptionForm.controls['name'].setValue('');
    component.subscriptionForm.controls['email'].setValue('');
    expect(component.subscriptionForm.valid).toBeFalse();
  });
  
  it('should validate the form if all required fields are filled', () => {
    component.subscriptionForm.controls['name'].setValue('Test Name');
    component.subscriptionForm.controls['email'].setValue('test@example.com');
    component.subscriptionForm.controls['childName'].setValue('Child Name');
    component.subscriptionForm.controls['birthDay'].setValue(1);
    component.subscriptionForm.controls['birthMonth'].setValue('January');
    component.subscriptionForm.controls['birthYear'].setValue(2020);
    component.subscriptionForm.controls['grade'].setValue('Grade 2');
    component.subscriptionForm.controls['gender'].setValue('Boy');
  
    expect(component.subscriptionForm.valid).toBeTrue();
  });
  
  // testing methods 
  it('should add a topic if less than 3 topics are selected', () => {
    component.toggleTopic('Arabic');
    expect(component.selectedTopics).toContain('Arabic');
  });
  
  it('should not add more than 3 topics', () => {
    component.selectedTopics = ['Arabic', 'English', 'Sports'];
    component.toggleTopic('Islamic');
    expect(component.selectedTopics.length).toBe(3);
    expect(component.selectedTopics).not.toContain('Islamic');
  });
});
