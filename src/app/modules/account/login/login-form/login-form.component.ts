import { Component , OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public loginForm: FormGroup;
  public type: string = 'password';

  constructor() {
    this.loginForm = this.validateLoginForm();
  }

  ngOnInit(): void {
  }

  // Set LoginForm
  validateLoginForm(): FormGroup {
    return new FormGroup({
      email: new FormControl(undefined, [Validators.required, Validators.email]),
      password: new FormControl(undefined, [Validators.required, Validators.minLength(8)])
    });
  }

  // doLogin
  doLogin(form: FormGroup): void {
  }
  

  // Show and hide passwd
  showHidePasswd(): void {
    this.type = (this.type == 'password') ? 'text' : 'password';
  }
}
