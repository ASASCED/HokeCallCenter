import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../../../services/card.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {

  constructor(private router: Router, private cardsService: CardService) {
    console.log(this.cardsService.infoQuote);
  }

  ngOnInit() {
  }

  onBack() {
    this.router.navigateByUrl('/main');
  }

}
