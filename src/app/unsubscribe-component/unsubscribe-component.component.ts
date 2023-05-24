import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  template: ''
})
export class UnsubscribeComponentComponent implements OnDestroy {
  protected subscriptionList: Array<Subscription> = [];
  ngOnDestroy(): void {
    this.subscriptionList.forEach(subscription => subscription.unsubscribe());
  }
}
