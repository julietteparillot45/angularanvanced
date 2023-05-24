import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "./authentication.service";
import {Router} from "@angular/router";
import { User } from './model/user';

@Component({
  selector: 'crm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user:User | undefined;
  constructor(private authentService: AuthenticationService, private router: Router) {
    if (this.authentService.authenticated) {
      this.authentService.disconnect();
      console.log('discornnect');
    }
  }

  public loginForm: FormGroup = new FormGroup({
    username: new FormControl('apside@email.com', {
      validators: [Validators.required, Validators.min(3)]
    }),
    password: new FormControl('apside', {
      validators: [Validators.required, checkPassword]
    })
  });


  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    console.log('submit', this.loginForm.value)
    this.authentService.authentUser(this.loginForm.get('username')?.value,
    this.loginForm.get('password')?.value).subscribe(user=> this.user = user);

   if(!!this.user)
      this.router.navigateByUrl('/home');
  
    console.log("POUAHHHHH " , this.user);
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
