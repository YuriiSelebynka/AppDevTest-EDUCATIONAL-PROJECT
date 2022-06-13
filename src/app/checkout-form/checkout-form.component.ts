import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {
  msg: string = "@gmail.com";
  contact = new Contact();
  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  submit(form) {
    this.contact.firstName = form.firstName;
    this.contact.lastName = form.lastName;
    this.contact.email = form.email;
    //this.contact.password = form.password;
    window.alert("Cart is successfully Submitted by " + this.contact.firstName);
    this.submitted = true;
    console.log(form);
  };

}
