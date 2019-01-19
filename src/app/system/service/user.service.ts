import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}
  private baseUrl = "http://localhost:8888/api";

  getUsers() {
    return this.http.get(`${this.baseUrl}/users`);
  }

  addUser(model) {
    return this.http.post(`${this.baseUrl}/user`, model);
  }

  removeUser(id) {
    return this.http.delete(`${this.baseUrl}/user/${id}`);
  }
}
