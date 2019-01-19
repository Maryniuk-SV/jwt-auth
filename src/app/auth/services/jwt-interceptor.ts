import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const token = localStorage.getItem("token");
    console.log("token: ", token);
    if (token) {
      request = request.clone({
        headers: request.headers.set("token", token)
      });
    }

    return next.handle(request).pipe(
      catchError(err => {
        console.log("err: ", err);
        if (err.status === 401) {
          // auto logout if 401 response returned from api
          // this.authService.logout();
          // location.reload(true);
        }

        const error = err.error.message || err.statusText;
        return throwError(error);
      })
    );
  }
}
