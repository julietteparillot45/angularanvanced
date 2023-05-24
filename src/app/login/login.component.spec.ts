import {ComponentFixture, TestBed} from '@angular/core/testing';
import {LoginComponent} from './login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {AppMaterialModule} from "../app-material.module";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {HelpComponent} from "../component/help/help.component";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent, HelpComponent],
      imports: [ReactiveFormsModule, RouterTestingModule, AppMaterialModule, NoopAnimationsModule]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable login button on creation', () => {
    const element = fixture.nativeElement;
    expect(element.querySelector('button').disabled).toBeTruthy();
  })

  it('should enable button when ok', () => {
    const compo = fixture.componentInstance;
    compo.loginForm?.get('username')?.patchValue('aaaaaaa');
    compo.loginForm?.get('password')?.patchValue('aaaaaaa');
    compo.loginForm.updateValueAndValidity();
    expect(compo.loginForm.valid);
  })
});
