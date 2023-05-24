import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../login/authentication.service';

@Injectable()
export class JWTInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthenticationService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   const jwtToken= this.authService.token;
   // httprequest est clonée et on ajoute le header Authorization
   const clone = req.clone({
    setHeaders: {
      Authorization: `Bearer ${jwtToken}` }});

      return next.handle(clone); 
  }
}
