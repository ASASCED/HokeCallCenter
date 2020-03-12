import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../../interfaces/card';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from '../../../services/card.service';

@Component({
  selector: 'app-search-appointment',
  templateUrl: './search-appointment.component.html',
  styleUrls: ['./search-appointment.component.sass'],
})
export class SearchAppointmentComponent implements OnInit {
  @Input() card: Card;
  appointments: Card[] = [];
  data: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cardService: CardService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.appointments = this.cardService.searchAppointment(params['data']);
      this.data = params['data'];
    });
  }

  ngOnInit() {}

  editAppointment() {
    this.cardService.card = this.card;
    this.router.navigate(['/edit', this.card.idAppointment]);
  }

  getSelectedCard(event: Card) {
    this.card = event;
  }

  addNewAppointment() {
    this.router.navigateByUrl('/add');
  }
}
