import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get('https://reqres.in/api/users');
  }

  getUser(id) {
    return this.httpClient.get('https://reqres.in/api/users/' +id);
  }

  delete_user(id) {
    return this.httpClient.delete('https://reqres.in/api/users/' +id);
  }
}
