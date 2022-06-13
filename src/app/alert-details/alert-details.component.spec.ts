import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Product } from 'src/product';

import { AlertDetailsComponent } from './alert-details.component';

describe('AlertDetailsComponent', () => {
  let component: AlertDetailsComponent;
  let fixture: ComponentFixture<AlertDetailsComponent>;
  const stubProduct : Product = {
    id: 3,
    name: 'Devops',
    price: 300,
    quantity: 0,
    status: '4 left',
    description: "this course help us to understand automation testing",
    imgaddress : "https://upload.wikimedia.org/wikipedia/commons/4/4f/SoftwareDevelopmentLifeCycle.jpg"
  };
  const stubProduct2 : Product = {
    id: 3,
    name: 'Devops',
    price: 710,
    quantity: 2,
    status: '4 left',
    description: "this course help us to understand automation testing",
    imgaddress : "https://upload.wikimedia.org/wikipedia/commons/4/4f/SoftwareDevelopmentLifeCycle.jpg"
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertDetailsComponent);
    component = fixture.componentInstance;
    component.product = stubProduct;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('verify discount paragraph of the alert-details component', () => {
    const el : HTMLElement = fixture.nativeElement;
    const p = el.querySelector("p");
    expect(p.textContent).toEqual("Course is available for discount");
  });

  it('verify quantity depended paragraph of the alert-details component', () => {
    const el1 : HTMLElement = fixture.nativeElement;
    const p1 = el1.querySelectorAll("p");
    expect(p1.length).toEqual(2);
    component.product = stubProduct2;
    fixture.detectChanges();
    const el2 : HTMLElement = fixture.nativeElement;
    const p2 = el2.querySelectorAll("p");
    expect(p2.length).toEqual(0);
  });

  it('', () => {
    component.product = stubProduct;
    fixture.detectChanges();
    let selectedProduct : Product;
    component.notify.subscribe (
      (product) => selectedProduct = product); //to resolve the promice
    component.clickChildMe();
    expect(selectedProduct).toEqual(stubProduct);
  });
});
