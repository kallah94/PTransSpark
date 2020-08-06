import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { ILivyUser } from 'src/app/_models/livyuser';
import { Observable } from 'rxjs';
import { IBatchSession, BatchSession } from '../_models/batch';
import { GetBatches } from '../_models/getBaches';
import { apiUrl } from '../apiUrl';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  public resourceUrl = 'http://localhost:5000';
  constructor(protected http: HttpClient) {}
  
  // Work
  create_session(user: ILivyUser): Observable<HttpResponse<ILivyUser>> {
    return this.http.post<ILivyUser>(`${this.resourceUrl}/loginSession`, user, { observe: 'response'});
  }

  // Work
  delete_session(id: number): Observable<HttpResponse<number>> {
    return this.http.post<number>(`${this.resourceUrl}/deleteSession/${id}`, id, { observe: 'response'});
  }

  // work
  info_session(id: number): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${this.resourceUrl}/sessions/${id}`, {observe: 'response'});
  }

  // work
  get_sessions(): Observable<HttpResponse<any[]>> {
    return this.http.get<any[]>(`${this.resourceUrl}/sessions`, {observe: 'response'});
  }

  // work
  create_statement(id: number): Observable<HttpResponse<any>> {
    const data = {
      code: 'print("I am python");\
      print("une autre test")'
    };
    return this.http.post<any>(`${this.resourceUrl}/sessions/${id}/statements`, data, { observe: 'response'});
  }

  getbaches(): Observable<HttpResponse<GetBatches>> {
    return this.http.get<GetBatches>(`${this.resourceUrl}/batches`, {observe: 'response'});
  }

  createBatche(batche: BatchSession): Observable<HttpResponse<BatchSession>> {
    return this.http.post<BatchSession>(`${this.resourceUrl}/createBatche`, batche, { observe: 'response'});
  }

  deleteBatche(id: number): Observable<HttpResponse<any>>{
    return this.http.post<any>(`${this.resourceUrl}/deleteBatche/${id}`, {observe: 'response'});
  }

  /**
   * Methodes to saves modeles of sessions and batches
   */
  saveModel(batche: BatchSession) {
    return this.http.post(`${apiUrl}/models/save`, batche);
  }

  loadModel(name: string){
    return this.http.get(`${apiUrl}/load/${name}`);
  }

  getAllmodels() {
    return this.http.get<BatchSession[]>(`${apiUrl}/models`);
  }

  loadPyspark() {
    return this.http.get<BatchSession>(`${apiUrl}/models/load/pyspark`);
  }

  loadPhoto() {
    return this.http.get('assets/images.json');
  }

  deleteModel() {
    return this.http.get(`${apiUrl}/models/delete/pyspark`)
  }
}
