import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login/login.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private loginService: LoginService ) { }

  ngOnInit() { }

  onSubmit(form: NgForm) {
    this.loginService.httpLoginUser(form.value).subscribe(
      res => res,
      err => err,
      () => {}
    );
  }
}
