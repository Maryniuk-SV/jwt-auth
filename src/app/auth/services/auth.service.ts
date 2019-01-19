import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { throwError, of } from "rxjs";

@Injectable()
export class AuthService {
  private baseUrl = "http://localhost:8888/api/auth";

  constructor(private http: HttpClient) {}

  registration(model) {
    return this.http.post(`${this.baseUrl}/registration`, model);
  }

  login(model) {
    return this.http.post(`${this.baseUrl}/login`, model).pipe(
      map((res: any) => {
        if (res.success) {
          localStorage.setItem("token", res.token);
        }
        return res;
      }),
      catchError(err => {
        console.log("err: ", err);
        return of(err);
      })
    );
  }

  logout() {
    localStorage.removeItem("token");
  }
}
