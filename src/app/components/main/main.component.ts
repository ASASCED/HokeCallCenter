import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/interfaces/card';
import { CardService } from 'src/app/services/card.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  cardsInfo: Card[];
  cardInfo: Card;
  buttonAdd = true;
  inputValue: number;

  constructor(private cardsService: CardService, private router: Router) {
      Swal.fire({
        title: 'Loading...',
        allowOutsideClick: false,
        allowEscapeKey: false,
        onOpen: () => {
          Swal.showLoading();
        }
      });

      cardsService.getAppointments(1, 1, 20).then(data => {
          this.cardsInfo = data;
          Swal.close();
      });
  }

  ngOnInit() {}

  getSelectedCard(event: Card) {
      this.cardInfo = event;
  }

  buttonChangeAdd(): void {
      this.buttonAdd = !this.buttonAdd;
  }

  async addNewAppointment() {
    this.router.navigateByUrl('/add');
  }

}
