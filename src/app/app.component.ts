import {Component} from '@angular/core';

@Component({
  selector: 'crm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularCRM';

  handle($event: string): void {
    console.log($event);
  }
}
