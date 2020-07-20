import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserRegister, UserLogin } from '../_models';
import { apiUrl } from '../apiUrl';

@Injectable({ providedIn: 'root' })
export class UserService {
    public resourceUrl = 'http://localhost:8080';
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${apiUrl}/users`);
    }

    register(user: UserRegister): Observable<HttpResponse<UserRegister>> {
        return this.http.post<UserRegister>(`${this.resourceUrl}/register`, user, { observe: 'response'});
    }

    login(user: UserLogin): Observable<HttpResponse<UserLogin>> {
        return this.http.post<UserLogin>(`${this.resourceUrl}/login`, user, { observe: 'response'});
    }

    delete(id: number) {
        return this.http.delete(`${apiUrl}/users/${id}`);
    }
}
