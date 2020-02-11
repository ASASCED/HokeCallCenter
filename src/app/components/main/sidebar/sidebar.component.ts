import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Card } from 'src/app/interfaces/card';
import { CardService } from 'src/app/services/card.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Quote } from '@angular/compiler';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit, OnChanges {
  @Input() cardInfo: Card;
  visible = false;
  show = true;
  data = [
    {
      name: 'Lily'
    }
  ];

  constructor(private cardsService: CardService, private router: Router, public auth: AuthService) {
    this.cardsService.getAppointments(1, 1, 1).then((data: Card[]) => {
      this.cardInfo = data[0];
    });
  }

  ngOnInit() {
    if (window.screen.width <= 840) {
      this.show = false;
    }
  }

  ngOnChanges(): void {
  }

  editAppointment() {
    Swal.fire({
      title: 'Loading...',
      allowOutsideClick: false,
      allowEscapeKey: false,
      onOpen: () => {
        Swal.showLoading();
      }
    });

    this.cardsService.getQuoteInfo(String(this.cardInfo.quoteNumberItc)).then((data: Quote) => {
      this.cardsService.infoQuote = data;
      Swal.close();
      this.router.navigateByUrl('/edit');
    }).catch((err) => {
      throw err;
    });
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

}
