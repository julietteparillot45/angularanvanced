import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerListeComponent } from './consumer-liste.component';

describe('ConsumerListeComponent', () => {
  let component: ConsumerListeComponent;
  let fixture: ComponentFixture<ConsumerListeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsumerListeComponent]
    });
    fixture = TestBed.createComponent(ConsumerListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
