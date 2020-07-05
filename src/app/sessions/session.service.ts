import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { IUser } from 'src/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  public resourceUrl = 'http://localhost:5000';
  constructor(protected http: HttpClient) {}
  
  // Work
  create_session(user: IUser): Observable<HttpResponse<IUser>> {
    return this.http.post<IUser>(`${this.resourceUrl}/loginSession`, user, { observe: 'response'});
  }

  // Work
  delete_session(id: number): Observable<HttpResponse<number>> {
    return this.http.post<number>(`${this.resourceUrl}/deleteSession/${id}`, id, { observe: 'response'})
  }

  // work
  info_session(id: number): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${this.resourceUrl}/sessions/${id}`, {observe: 'response'})
  }

  // work
  get_sessions(): Observable<HttpResponse<any[]>> {
    return this.http.get<any[]>(`${this.resourceUrl}/sessions`, {observe: 'response'})
  }
  
  // work
  create_statement(id: number): Observable<HttpResponse<any>> {
    const data = {
      'code':'print("I am python");\
      print("une autre test")'
      
    }
    return this.http.post<any>(`${this.resourceUrl}/sessions/${id}/statements`, data, { observe: 'response'})
  }

  getbaches(): Observable<HttpResponse<any>> {
    return this.http.get<any[]>(`${this.resourceUrl}/batches`, {observe: 'response'})
  }

  getbatche
}
