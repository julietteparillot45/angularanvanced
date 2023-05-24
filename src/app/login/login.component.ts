import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "./authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'crm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authentService: AuthenticationService, private router: Router) {
    if (this.authentService.authenticated) {
      this.authentService.disconnect();
      console.log('discornnect');
    }
  }

  public loginForm: FormGroup = new FormGroup({
    username: new FormControl('a', {
      validators: [Validators.required, Validators.min(3)]
    }),
    password: new FormControl('a', {
      validators: [Validators.required, checkPassword]
    })
  });


  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    console.log('submit', this.loginForm.value)
    const res = this.authentService.authentUser(this.loginForm.value.login,
      this.loginForm.value.password);

    if (res != null) {
      this.router.navigateByUrl('/home');
    }
    console.log(res);
  }
}

function checkPassword(c: AbstractControl): ValidatorErrors | null {
  if (c.value.length < 5) {
    return {
      checkPassword: 'Error controle password'
    };
  }
  return null;
}

export declare type ValidatorErrors = {
  [key: string]: any;
}
