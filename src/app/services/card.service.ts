import { Injectable } from '@angular/core';
import axios from 'axios';
import { Card } from '../interfaces/card';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private URL = 'http://localhost:59692/';
  infoCard: Card;
  card: Card;

  constructor() {}

  async postAppointment(postObject: Card) {
    try {
      const res = await axios.post(`${this.URL}Appointmets`, postObject);
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
}
