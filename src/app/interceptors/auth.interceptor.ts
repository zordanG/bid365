import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpClient
} from '@angular/common/http';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { API_PATH } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  static acessToken = "";

  constructor(
    private http: HttpClient
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const req = request.clone({
      setHeaders: {
        Authorization: `Bearer ${AuthInterceptor.acessToken}`,
        app: ''
      },
    });

    return next.handle(req).pipe(catchError(
      (err: HttpErrorResponse) => {
        if(err.status === 401) {
          return this.http.post(`${API_PATH}refresh`, {}).pipe(
            switchMap((res: any) => {
              AuthInterceptor.acessToken = res.token;

              return next.handle(request.clone({
                setHeaders: {
                  Authorization: `Bearer ${AuthInterceptor.acessToken}`,
                  app: ''
                },
              }))
            })
          );
        }
        return throwError(() => err);
      }
    ));
  }
}
