import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {RegisterService} from '../../../../services/register/register.service';
import * as M from 'materialize-css/dist/js/materialize';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit, AfterViewInit {
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
      res => {
        console.log(res);
      }
    );
  }
}
