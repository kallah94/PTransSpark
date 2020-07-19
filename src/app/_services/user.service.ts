import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';
import { apiUrl } from '../apiUrl';

@Injectable({ providedIn: 'root' })
export class UserService {
    public resourceUrl = 'http://localhost:5000';
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${apiUrl}/users`);
    }

    register(user: User): Observable<HttResponse<User>> {
        return this.http.post<User>(`${resourceUrl}/register`, user, {observable: 'response'});
    }

    delete(id: number) {
        return this.http.delete(`${apiUrl}/users/${id}`);
    }
}