import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {RegisterInterface} from '../../interface/register.interface';
import {environment} from '../../../environments/environment';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private readonly urlServer: string;
  constructor(
    private httpClient: HttpClient
  ) {
    this.urlServer = environment.url;
  }

  httpCreateUser(user: RegisterInterface): Observable<HttpResponse<RegisterInterface>> {
    const url = `${this.urlServer}/api/user/create`;
    const body = new HttpParams()
      .set('email', user.email)
      .set('password', user.password)
      .set('first_name', user.first_name)
      .set('last_name', user.last_name);

    return this.httpClient.post<RegisterInterface>(
      url,
      body,
      { observe: 'response', headers: new HttpHeaders({
          'content-type': 'application/x-www-form-urlencoded'
        })
      }
    ).pipe(
      catchError( (error: HttpErrorResponse) => {
        console.warn(`Ocurrió un error durante el servicio: `, error);
        return throwError(error);
      })
    );
  }
}
