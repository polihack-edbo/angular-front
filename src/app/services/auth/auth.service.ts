import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {JwtService} from '../jwt/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private jwtService: JwtService
  ) { }

  isAuth() {
    if (this.jwtService.getJWT) {
      const accessToken = this.jwtService.getJWT.token;
      if (accessToken.length > 0) {
        return true;
      }
    } else {
      return this.router.navigate(['/access/login']);
    }
  }
}
