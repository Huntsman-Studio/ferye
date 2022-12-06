import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public step: number = 1;
  public type: string = 'password';
  public registerForm: FormGroup;

  constructor(private _meta: Meta, private _title: Title) {
    // register form
    this.registerForm = this.validateRegisterForm();

    // meta tags
    _meta.addTags([
      // Essential META Tags
      { property: 'og:title', content: 'Register Ferye' },
      { property: 'og:type', content: 'webiste' },
      { property: 'og:image', content: '' },
      { property: 'og:url', content: 'https://ferye.com/account/register' },
      // Non-Essential, But Recomended
      { property: 'og:description', content: 'Register to ferye account and manage your orders and your personal data.' }
    ]);

    // title
    _title.setTitle("Εγγραφή | Ferye all about jewellery")
  }

  ngOnInit(): void {
    
  }

  // validate register form
  validateRegisterForm(): FormGroup {
    return new FormGroup({
      email: new FormControl(undefined, [Validators.required, Validators.email]),
      // TODO: validate password RegEx 
      password: new FormControl(undefined, [Validators.required, Validators.minLength(8), Validators.maxLength(32)])
    })
  }

  // TODO: // register
  register(form: FormGroup): void {

  }

  // TODO: // check password 

  // show hide password
  showHidePasswd(): void {
    this.type = (this.type == 'password') ? 'text' : 'password';
  }

  // check step
  nextStep(): void {
    this.step = (this.step == 1) ? 2 : 1;
  }
}
