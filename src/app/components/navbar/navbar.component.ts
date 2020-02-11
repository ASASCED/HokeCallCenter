import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) {
    console.log(this.auth.loggedIn);
  }

  ngOnInit() {
  }

  controlPanel() {
    this.router.navigateByUrl('/main');
  }

}
