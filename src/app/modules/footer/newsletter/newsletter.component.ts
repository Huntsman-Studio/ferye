import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})

export class NewsletterComponent implements OnInit {

  newsletterForm: FormGroup

  constructor() {
    this.newsletterForm = this.getnerateNewsletter();
  }

  ngOnInit(): void {
  }

  // generateNewsletterForm
  getnerateNewsletter() {
    return new FormGroup({
      email: new FormControl(undefined, [Validators.required, Validators.email])
    })
  }

  // submiteForm
  submitNewsletter(form: FormGroup) {

  }

}
