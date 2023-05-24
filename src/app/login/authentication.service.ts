import {Injectable} from '@angular/core';
import {User} from "./model/user";
import { HttpClient } from '@angular/common/http';
import { AuthentResponse } from './model/authent-response';

import {map, Observable} from "rxjs"
const USER_STORAGE_KEY = 'angular-crm.user';
const JWT_STORAGE_KEY: string = 'angular-crm.token';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUser?:User|null; 
  private jwtToken?: string|null;


  constructor(private http: HttpClient) {
  // Check user connected ?
    if (sessionStorage.getItem(USER_STORAGE_KEY) !== null) {
      this.currentUser = JSON.parse(sessionStorage.getItem(USER_STORAGE_KEY)!);
      this.jwtToken = sessionStorage.getItem(JWT_STORAGE_KEY)!;
    }
  }

  /* constructor() {
    if (sessionStorage.getItem(USER_STORAGE_KEY) !== null) {
      this.currentUser = JSON.parse(sessionStorage.getItem(USER_STORAGE_KEY)!);
    }
  } */

  public get authenticated(): boolean {
    return !!this.currentUser;
  }

  /* authentUser(login: string, password: string): User {
    this.currentUser = {
      id: 1,
      login: login,
      lastname: 'Doe',
      firstname: 'John'
    };
    sessionStorage.setItem(USER_STORAGE_KEY, JSON.stringify(this.currentUser));
    return this.currentUser;
  } */


  public get token(): string | undefined | null {
    return this.jwtToken;
  }
/* 
  disconnect(): void {
    this.currentUser = undefined;
    sessionStorage.removeItem(USER_STORAGE_KEY);
  } */



  public authentUser(login: string, password: string): Observable<User> {
    console.log('login', login);
    console.log('password', password);
    return this.http.post<AuthentResponse>('/api/auth/login', { email: login, password: password })
    .pipe(
      map((result:AuthentResponse)=> {
          console.log('result  AUTHENNNN TTT T T T ', result);
          this.currentUser = result.user;
          this.jwtToken = result.token;
          sessionStorage.setItem(USER_STORAGE_KEY, JSON.stringify(this.currentUser));
          sessionStorage.setItem(JWT_STORAGE_KEY, this.jwtToken);
          return this.currentUser;
        
      })
    );
    }

    
    public disconnect(): void {
      this.currentUser = null;
      this.jwtToken = null;
      sessionStorage.removeItem(USER_STORAGE_KEY);
      sessionStorage.removeItem(JWT_STORAGE_KEY);
      }
}
