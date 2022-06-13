import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Contact } from '../contact';

import { CheckoutFormComponent } from './checkout-form.component';

//ng test --include="src\app\checkout-form\checkout-form.component.spec.ts"
describe('CheckoutFormComponent', () => {
  let component: CheckoutFormComponent;
  let fixture: ComponentFixture<CheckoutFormComponent>;
  const formData : Contact = {
    firstName: "Yurii",
    lastName: "Smith",
    email: "yurii@gmail.com",
    password: "1234"
  };

  beforeEach(fakeAsync( () => {
    TestBed.configureTestingModule({
      imports : [FormsModule],
      declarations: [ CheckoutFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(fakeAsync(() => {
    fixture = TestBed.createComponent(CheckoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit', () => {
    expect(component).toBeTruthy();
    expect(component.submitted).toBe(false);
    component.submit(formData);
    fixture.detectChanges();
    expect(component.submitted).toBe(true);
    const formHtml = fixture.nativeElement.querySelector(".my-container");
    expect(formHtml.hidden).toEqual(true);
    component.submitted = false;
    fixture.detectChanges();
    expect(formHtml.hidden).toEqual(false);
  });

  it('User input field', fakeAsync( () => {
    const email = fixture.nativeElement.querySelector("#exampleInputEmail1");
    email.value = 'I am Testing';
    email.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    tick();
    const message = fixture.nativeElement.querySelector("p");
    expect(message.textContent).toMatch("I am Testing");
  }));
});
