import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http: HttpClient) { }

  getUsers = () => {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getUserById = (id: number) => {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
