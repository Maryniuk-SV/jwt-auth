import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable()
export class AuthService {
  private baseUrl = "http://localhost:8888/api/auth";

  constructor(private http: HttpClient, private router: Router) {}

  registration(model) {
    return this.http
      .post(`${this.baseUrl}/registration`, model)
      .pipe(catchError(err => throwError(err)));
  }

  login(model) {
    return this.http.post(`${this.baseUrl}/login`, model).pipe(
      map((res: any) => {
        if (res.success) {
          localStorage.setItem("token", res.token);
          localStorage.setItem("refreshToken", res.refreshToken);
        }
        return res;
      }),
      catchError(err => throwError(err))
    );
  }

  logout() {
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("token");
    this.router.navigate(["/auth/login"]);
  }
}
