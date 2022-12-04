import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public type: string = 'password';
  public registerForm: FormGroup;

  constructor() {
    this.registerForm = this.validateRegisterForm();
  }

  ngOnInit(): void {
    
  }

  // validate register form
  validateRegisterForm(): FormGroup {
    return new FormGroup({
      email: new FormControl(undefined, [Validators.required, Validators.email]),
      password: new FormControl(undefined, [Validators.required, Validators.minLength(8), Validators.maxLength(32), Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$")])
    })
  }

  // register
  register(form: FormGroup): void {

  }

  // show hide password
  showHidePasswd(): void {
    this.type = (this.type == 'password') ? 'text' : 'password';
  }
}
