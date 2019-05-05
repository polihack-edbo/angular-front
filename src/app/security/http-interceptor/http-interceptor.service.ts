import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';

import {JwtInterface} from '../../interface/jwt.interface';

import { Observable, throwError } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { catchError } from 'rxjs/operators';
import {JwtService} from '../../services/jwt/jwt.service';


@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService {
  constructor(
    private jwtService: JwtService) {}

  intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    const jwt: JwtInterface = this.jwtService.getJWT;
    if (!isNullOrUndefined(jwt)) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${jwt.token}`
        }
      });
      return next.handle(req).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.intercept(req, next);
          }
          return throwError(error);
        })
      );
    }
    return next.handle(req);
  }
}
