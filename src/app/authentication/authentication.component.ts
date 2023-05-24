import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'crm-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {

  public user = 'myTSIsPerfect';

  registerUser(user: NgForm): void {
    console.log(user.value.password);
  }
}
