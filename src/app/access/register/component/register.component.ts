import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {RegisterService} from '../../../services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor( private registerService: RegisterService ) { }

  ngOnInit() { }

  onSubmit(form: NgForm) {
    console.log(form.value);  // { first: '', last: '' }
    this.registerService.httpCreateUser(form.value).subscribe( res => {
      console.log(res);
    });
  }
}
