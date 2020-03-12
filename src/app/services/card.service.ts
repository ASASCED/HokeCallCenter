import { Injectable } from '@angular/core';
import axios from 'axios';
import { Card } from '../interfaces/card';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private URL = 'http://localhost:59692/';
  infoCard: Card;
  card: Card;
  allCards: Card[];

  constructor() {
    this.getAppointmentsAll().then((cards: Card[]) => {
      this.allCards = cards;
    });
  }

  async postAppointment(postObject: object) {
    try {
      const res = await axios.post(`${this.URL}Appointments`, postObject);
      return res;
    } catch (error) {
      throw error;
    }
  }

  async putAppointment(id: number, putObject: object) {
    try {
      const res = await axios.put(`${this.URL}Appointments/${id}`, putObject, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return res;
    } catch (error) {
      throw error;
    }
  }

  async getAppointments(
    idLogin: number,
    offset: number,
    limit: number
  ): Promise<Card[]> {
    try {
      const res = await axios.get<Card[]>(
        `${this.URL}Appointments?idLogin=${idLogin}&offset=${offset}&limit=${limit}`
      );
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  async getAppointmentsAll(): Promise<Card[]> {
    try {
      const res = await axios.get<Card[]>(`${this.URL}Appointments/All`);
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  async getOffices(): Promise<Card[]> {
    try {
      const res = await axios.get<Card[]>(`${this.URL}Offices`);
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  async getTypes(): Promise<Card[]> {
    try {
      const res = await axios.get<Card[]>(
        `${this.URL}StatusAppointments/Types`
      );
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  async getStatus(): Promise<Card[]> {
    try {
      const res = await axios.get<Card[]>(
        `${this.URL}StatusAppointments/Login/1`
      );
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  async getLanguages(): Promise<Card[]> {
    try {
      const res = await axios.get<Card[]>(`${this.URL}Languages`);
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  async getAppointment(id: number): Promise<Card> {
    try {
      const res = await axios.get<Card>(
        `${this.URL}Appointments/${String(id)}`
      );
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  searchAppointment(data: string): Card[] {
    Swal.fire({
      title: 'Searching...',
      allowOutsideClick: false,
      allowEscapeKey: false,
      onOpen: () => {
        Swal.showLoading();
      },
    });

    let appointments: Card[] = [];
    data = data.toLowerCase();

    for (let appointment of this.allCards) {
      let nombre = appointment.fullName.toLowerCase();

      if (nombre.indexOf(data) >= 0) {
        appointments.push(appointment);
      }
    }

    Swal.close();

    return appointments;
  }
}
