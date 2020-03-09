import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Card } from 'src/app/interfaces/card';
import { CardService } from 'src/app/services/card.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Quote } from '@angular/compiler';
import { AuthService } from '../../../services/auth.service';
import { UserAccountService } from '../../../services/user-account.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass'],
})
export class SidebarComponent implements OnInit, OnChanges {
  @Input() card: Card;
  userInfo: any;

  constructor(
    private cardsService: CardService,
    private router: Router,
    public auth: AuthService
  ) {
    this.cardsService.getAppointments(1, 1, 1).then((data: Card[]) => {
      this.card = data[0];
    });

    this.auth.userProfile$.subscribe((user: any) => {
      this.userInfo = user;
    });
  }

  ngOnInit() {}

  ngOnChanges(): void {}

  editAppointment() {
    this.router.navigate(['/edit', this.card.idAppointment]);
  }
}
