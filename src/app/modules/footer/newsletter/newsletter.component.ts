import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewsletterService } from 'src/app/core/services/newsletter.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})

export class NewsletterComponent implements OnInit {

  newsletterForm: FormGroup

  constructor(private newsletterService: NewsletterService) {
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

    console.log(form.value.email)

    if(form.valid) {
      this.newsletterService.addToList(form.value.email).subscribe( res => {
        console.log(res)
      });
    }
  }

}
