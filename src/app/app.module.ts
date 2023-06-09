import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthenticationComponent} from './authentication/authentication.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppMaterialModule} from './app-material.module';
import {HelpComponent} from './component/help/help.component';
import {HomeComponent} from './home/home.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import {RouterModule} from "@angular/router";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JWTInterceptorService } from './common/jwtinterceptor.service';
import { PhonePipe } from './common/phone.pipe';
import { ConsumerListeComponent } from './consumer/consumer-liste/consumer-liste.component';
import { UnsubscribeComponentComponent } from './unsubscribe-component/unsubscribe-component.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    LoginComponent,
    HelpComponent,
    HomeComponent,
    PhonePipe,
    ConsumerListeComponent,
    UnsubscribeComponentComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    MatTooltipModule,
    HttpClientModule,
    
  ],
  exports: [
    FormsModule, 
    
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: JWTInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
