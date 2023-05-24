import {Component, inject} from '@angular/core';
import { DemoObservableService } from './common/demo-observable.service';

@Component({
  selector: 'crm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularCRM';
  
constructor(private demoObservableService: DemoObservableService ) {
  this.demoObservable();
}


  handle($event: string): void {
    console.log($event);

  }

  demoObservable(): void {
    this.demoObservableService.getObservable().subscribe(
    {
      next: (value: number) => {console.log('next ', value);},
      complete() {
        console.log('complete');
      },
    }
    );
  }
  
}
