import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CardService } from '../../../services/card.service';
import { Card } from 'src/app/interfaces/card';
import * as moment from 'moment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass'],
})
export class EditComponent implements OnInit {
  card: Card;
  languages: Card[] = [];
  id: number;

  constructor(
    private cardsService: CardService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params: any) => {
      this.id = params.id;

      this.cardsService.getAppointment(params.id).then((data: Card) => {
        this.card = data;
        console.log(this.card);
      });
    });

    this.cardsService.getLanguages().then((data: Card[]) => {
      this.languages = data;
    });
  }

  ngOnInit() {}

  onBack() {
    this.router.navigateByUrl('/main');
  }

  onOk(result: Date): void {
    const newDate = moment.parseZone(result).format('YYYY-MM-DDTHH:mm:ss');
    console.log('onOk: ' + newDate);
    this.card.dateTimeAppointment = newDate;
    console.log('Date changed: ', this.card.dateTimeAppointment);
    console.log('onOk', this.card);
  }

  onChange(result: Date): void {
    const newDate = moment.parseZone(result).format('YYYY-MM-DDTHH:mm:ss');
    this.card.dateTimeAppointment = newDate;
    console.log('onChange: ', newDate);
  }

  putAppointment() {
    this.changeIdLanguage();

    Swal.fire({
      title: 'Updating...',
      allowOutsideClick: false,
      allowEscapeKey: false,
      onOpen: () => {
        Swal.showLoading();
      },
    });

    console.log('ID Appointment: ' + this.id);

    this.cardsService
      .putAppointment(this.id, this.card)
      .then(() => {
        Swal.close();

        Swal.fire({
          title: 'Successfully updated',
          allowOutsideClick: false,
          allowEscapeKey: false,
          icon: 'success',
          timer: 1000,
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

  changeIdLanguage() {
    if (this.card.language1 === 'Spanish') {
      this.card.idLanguage = 1;
    } else {
      this.card.idLanguage = 2;
    }
  }
}
