import { Injectable } from '@angular/core';
import {JwtInterface} from '../../interface/jwt.interface';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private JWT: JwtInterface;
  constructor() {
    this.JWT = undefined;
  }

  set setJWT(token: JwtInterface) {
    this.JWT = token;
  }

  get getJWT(): JwtInterface {
    return this.JWT;
  }
}
