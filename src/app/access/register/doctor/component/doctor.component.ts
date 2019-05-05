import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {RegisterService} from '../../../../services/register/register.service';
import {NgForm} from '@angular/forms';
import * as M from 'materialize-css/dist/js/materialize';
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit, AfterViewInit {
  @ViewChild('datepicker') datepickerElement: ElementRef;
  private datePatient: Date;
  constructor( private registerService: RegisterService ) { }

  ngOnInit() { }

  ngAfterViewInit(): void {
    const datepicker = new M.Datepicker(this.datepickerElement.nativeElement, {
      maxDate: new Date(),
      // tslint:disable-next-line:no-shadowed-variable
      onDraw: (datepick: any) => {
        if ( datepicker ) {
          this.datePatient = datepick.date;
        }
      }
    });
  }

  onSubmit(form: NgForm) {
    form.value.birthday = this.datePatient;
    this.registerService.httpCreateUser(form.value).subscribe(
      res => { console.log(res); }
    );
  }
}
