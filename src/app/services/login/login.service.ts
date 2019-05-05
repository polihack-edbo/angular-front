import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {LoginInterface} from '../../interface/login.interface';
import {JwtInterface} from '../../interface/jwt.interface';
import {JwtService} from '../jwt/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly urlServer: string;
  constructor(
    private httpClient: HttpClient,
    private jwtService: JwtService,
  ) {
    this.urlServer = environment.url;
  }

  httpLoginUser(user: LoginInterface): Observable<HttpResponse<JwtInterface>> {
    const url = `${this.urlServer}/api/user/token`;
    const body = new HttpParams()
      .set('email', user.email)
      .set('password', user.password);

    return this.httpClient.post<JwtInterface>(
      url,
      body,
      { observe: 'response', headers: new HttpHeaders({
          'content-type': 'application/x-www-form-urlencoded'
        })
      }
    ).pipe(
      map( res => {
        this.jwtService.setJWT = res.body;
        return res;
      }),
      catchError( (error: HttpErrorResponse) => {
        console.warn(`Ocurrió un error durante el servicio: `, error);
        return throwError(error);
      })
    );
  }
}
