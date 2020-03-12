import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/interfaces/card';
import { CardService } from 'src/app/services/card.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserAccountService } from '../../services/user-account.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass'],
})
export class MainComponent implements OnInit {
  cards: Card[] = [];
  card: Card;
  buttonAdd = true;
  cardsNumber: number = 20;

  constructor(
    private cardService: CardService,
    private router: Router,
    public auth: AuthService,
    private userAccount: UserAccountService
  ) {
    this.userAccount.userInfo().then((user: any) => {
      Swal.fire({
        title: 'Loading...',
        allowOutsideClick: false,
        allowEscapeKey: false,
        onOpen: () => {
          Swal.showLoading();
        },
      });

      this.cardService
        .getAppointments(user.idlogin, 1, this.cardsNumber)
        .then(data => {
          this.cards = data;
          Swal.close();
        })
        .catch(() => {
          Swal.close();

          Swal.fire({
            title: 'Something was wrong!',
            allowOutsideClick: false,
            allowEscapeKey: false,
            icon: 'error',
            timer: 2000,
          });
        });

      console.log(this.auth.loggedIn);
    });
  }

  ngOnInit() {}

  getSelectedCard(event: Card) {
    this.card = event;
  }

  addNewAppointment() {
    this.router.navigateByUrl('/add');
  }
}
