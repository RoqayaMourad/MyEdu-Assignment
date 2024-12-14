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
});
