import { Component, OnInit, OnChanges } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { UserAccountService } from '../../../services/user-account.service';
import { Appointment } from 'src/app/classes/appointment';

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

  newAppointment: Appointment;

  constructor(
    private cardsService: CardService,
    private userAccount: UserAccountService
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
  }

  ngOnInit() {
    this.userAccount.userInfo().then((data: any) => {
      this.idLogin = data.idlogin;
      console.log(this.idLogin);
    });
  }

  printValue() {
    console.log(this.newAppointment.Csr);
  }
}
