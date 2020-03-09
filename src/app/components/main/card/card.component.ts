import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Card } from 'src/app/interfaces/card';
import { CardService } from '../../../services/card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  @Output() infoCard: EventEmitter<Card>;

  constructor(private cardsService: CardService, private router: Router) {
    this.infoCard = new EventEmitter();
  }

  ngOnInit() {}

  selectedCard() {
    this.infoCard.emit(this.card);
  }

  async editAppointment() {
    this.cardsService.card = this.card;
    this.router.navigate(['/edit', this.card.idAppointment]);
  }
}
