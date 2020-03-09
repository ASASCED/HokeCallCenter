import { Injectable } from '@angular/core';
import axios from 'axios';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserAccountService {
  private URL = 'http://localhost:59692/';

  constructor(private auth: AuthService) {}

  async userInfo() {
    let emailAuth: string;

    this.auth.userProfile$.subscribe((user: any) => {
      emailAuth = user.email;
    });

    try {
      const res = await axios.get(`${this.URL}Logins/UserName/${emailAuth}`);
      return res.data;
    } catch (error) {
      throw error;
    }
  }
}
