import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Consumer } from './consumer';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  constructor(private http: HttpClient) { }

  //find by name get  /api/consumers?q=dupo) 
  findByName(lastName?: string): Observable<Consumer[]> {
    let params;
    if (lastName && lastName !== '') {
      params = new HttpParams({fromObject: {q: lastName }});
    }
    return this.http.get<Consumer[]>('/api/consumers', {observe: 'body', params});
  }
  // find by id 
findById(id:number):Observable<Consumer>{
  return this.http.get<Consumer>('/api/consumers/'+id);
}
  //post
   createConsummer(consumer:Consumer):Observable<Consumer>{
      return this.http.post<Consumer>('/api/consumers',consumer);
    }

  //put
  updateConsummer(consumer:Consumer):Observable<Consumer>{
    return this.http.put<Consumer>('/api/consumers/'+consumer.id,consumer);
  }

  //Delete
  deleteConsummer(id:number):Observable<Consumer>{
    return this.http.delete<Consumer>('/api/consumers/'+id);
  }

  getAllConsummers():Observable<Consumer[]>{
    return this.http.get<Consumer[]>('/api/consumers');
  }
}
