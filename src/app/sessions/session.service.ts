import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  public resourceUrl = 'http://localhost:8998';
  constructor(protected http: HttpClient) {}

  create_session() {
    const data = {'kind':'spark'}
    return this.http.post(`${this.resourceUrl}/sessions`, JSON.stringify(data))
      }
}
