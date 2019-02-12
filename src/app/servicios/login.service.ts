import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpClient, HttpParams } from '@angular/common/http';

import { User } from '../modelos/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = "http://localhost:3000/users";
  constructor(private http: HttpClient) { }

  confirmUser(nick, pass): Observable<User> {
    let params = new HttpParams().set('nick', nick).set('pass', pass);
    return this.http.get<User>(this.url, {params});
  }
}
