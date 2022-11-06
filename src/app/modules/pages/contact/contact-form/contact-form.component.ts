import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup

  constructor() {
    this.contactForm = this.createContactForm();
  }

  ngOnInit(): void {
  }

  // createForm
  createContactForm() {
    return new FormGroup({
      name: new FormControl(undefined, [Validators.required]),
      email: new FormControl(undefined, [Validators.required, Validators.email]),
      message: new FormControl(undefined, [Validators.required])
    });
  }

  // submitForm
  submitForm(form: FormGroup): void {

    if (form.valid) {
      // set obj
      let obj = {
        Name: form.value.name,
        Email: form.value.email,
        Message: form.value.message
      }
    }
    // post to service
    
  }
}
