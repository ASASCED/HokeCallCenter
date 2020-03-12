import { Component, OnInit, OnChanges } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { UserAccountService } from '../../../services/user-account.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass'],
})
export class AddComponent implements OnInit {
  statusType: any[] = [];
  officeFrom: any[] = [];
  languages: any[] = [];
  officeTo: any[] = [];
  status: any[] = [];
  types: any[] = [];
  idLogin: number;
  newDate: string;

  newAppointment: FormGroup = new FormGroup({
    QuoteNumberItc: new FormControl('', Validators.required),
    IdLogin: new FormControl('', Validators.required),
    FirstName: new FormControl('', Validators.required),
    Lastname: new FormControl('', Validators.required),
    CellPhone: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    HomePhone: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    Address: new FormControl('', Validators.required),
    City: new FormControl('', Validators.required),
    State: new FormControl('', Validators.required),
    Zip: new FormControl('', Validators.required),
    DateTimeAppointment: new FormControl('', Validators.required),
    Csr: new FormControl('', Validators.required),
    IdLanguage: new FormControl('', Validators.required),
    IdStatusType: new FormControl('', Validators.required),
    IdOfficeFrom: new FormControl('', Validators.required),
    IdOfficeTo: new FormControl('', Validators.required),
    IdStatus: new FormControl('', Validators.required),
  });

  constructor(
    private cardsService: CardService,
    private userAccount: UserAccountService,
    private router: Router
  ) {
    this.cardsService.getLanguages().then((data: any) => {
      console.log(data);
      this.languages = data;
    });

    this.cardsService.getOffices().then((data: any) => {
      console.log(data);
      this.officeFrom = data;
      this.officeTo = data;
    });

    this.cardsService.getTypes().then((data: any) => {
      console.log(data);
      this.status = data;
    });

    this.cardsService.getStatus().then((data: any) => {
      console.log(data);
      this.types = data;
    });

    this.userAccount.userInfo().then((user: any) => {
      this.newAppointment.controls['IdLogin'].setValue(user.idlogin);
      console.log(user.idlogin);
    });
  }

  ngOnInit() {
    this.userAccount.userInfo().then((data: any) => {
      this.idLogin = data.idlogin;
      console.log(this.idLogin);
    });
  }

  postAppointment() {
    Swal.fire({
      title: 'Updating...',
      allowOutsideClick: false,
      allowEscapeKey: false,
      onOpen: () => {
        Swal.showLoading();
      },
    });

    this.cardsService
      .postAppointment(this.newAppointment.value)
      .then(() => {
        Swal.close();

        Swal.fire({
          title: 'Successfully posted',
          allowOutsideClick: false,
          allowEscapeKey: false,
          icon: 'success',
          timer: 1000,
          onOpen: () => {
            this.router.navigateByUrl('/main');
          },
        });
      })
      .catch(() => {
        Swal.close();

        Swal.fire({
          title: 'Something was wrong!',
          allowOutsideClick: false,
          allowEscapeKey: false,
          icon: 'error',
        });
      });
  }

  cancelAction() {}

  onOk(result: Date): void {
    const newDate = moment.parseZone(result).format('YYYY-MM-DDTHH:mm:ss');
    console.log('onOk: ' + newDate);
    this.newDate = newDate;
    console.log('Date changed: ', this.newDate);
    console.log('onOk', this.newDate);
    this.newAppointment.controls['DateTimeAppointment'].setValue(this.newDate);
  }

  onChange(result: Date): void {
    const newDate = moment.parseZone(result).format('YYYY-MM-DDTHH:mm:ss');
    this.newDate = newDate;
    console.log('onChange: ', newDate);
  }
}
