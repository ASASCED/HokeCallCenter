import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Card } from 'src/app/interfaces/card';
import Swal from 'sweetalert2';
import { CardService } from '../../../services/card.service';
import { Router } from '@angular/router';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  @Output() infoCard: EventEmitter<Card>;

  constructor(private cardsService: CardService, private router: Router) {
    this.infoCard = new EventEmitter();
  }

  ngOnInit() { }

  selectedCard() {
    this.infoCard.emit(this.card);
    console.log('Activated Selected');
  }

  async editAppointment() {
    Swal.fire({
      title: 'Loading...',
      allowOutsideClick: false,
      allowEscapeKey: false,
      onOpen: () => {
        Swal.showLoading();
      }
    });

    this.cardsService.getQuoteInfo(String(this.card.quoteNumberItc)).then((data: Quote) => {
      this.cardsService.infoQuote = data;
      Swal.close();
      this.router.navigateByUrl('/edit');
    }).catch((err) => {
      throw err;
    });
  }
}
