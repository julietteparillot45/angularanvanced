import {Component, OnDestroy} from '@angular/core';
import { DemoObservableService } from './common/demo-observable.service';
import { map, finalize ,take} from 'rxjs/operators';
import { Subscriber } from 'rxjs';
@Component({
  selector: 'crm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'AngularCRM';
   c: Array<Subscriber<number>> | undefined;

   
constructor(private demoObservableService: DemoObservableService ) {
  this.demoObservableWithNExt();
  this.demoObservableWithPIPE();

}


  handle($event: string): void {
    console.log($event);

  }

  demoObservableWithNExt(): void {
    const d  = this.demoObservableService.getObservable().subscribe(
    {
      next: (value: number) => {console.log('next ', value);},
      complete() {
        console.log('complete');
      },
    }
    );

  }
  demoObservableWithPIPE(): void {
    const c  = this.demoObservableService.getObservable().pipe(
      map((i)=> {
        console.log ('map  ', i)
        return i; 
      }), 
  
      finalize(()=> console.log('finalize'))
      
    ).subscribe((x: number)=>{

      console.log('subscribe   ', x); 
    }
    );
  }


}
