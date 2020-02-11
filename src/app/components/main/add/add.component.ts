import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Quote } from '@angular/compiler';
import { CardService } from 'src/app/services/card.service';
import { Router } from '@angular/router';

import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass']
})
export class AddComponent implements OnInit {
  types: any[];
  offices: any[];
  status: any[];
  languages: any[];
  quoteInfo: Quote;
  fullname: string;

  constructor(private cardsService: CardService, private router: Router) {
  }

  ngOnInit() {}

  onBack() {
    this.router.navigateByUrl('/main');
  }
}
