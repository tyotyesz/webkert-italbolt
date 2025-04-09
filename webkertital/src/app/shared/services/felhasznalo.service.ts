import { Injectable } from '@angular/core';
import { Felhasznalo, FelhasznalokObject } from '../models/felhasznalok';

@Injectable({
  providedIn: 'root'
})
export class FelhasznaloService {

  constructor() { }

  isLoggedIn(): boolean {
      const user = localStorage.getItem('user');
      return user !== null;
    }
  isAdmin(): boolean {
      const user = localStorage.getItem('user');
      if (user) {
        const felhasznalo: Felhasznalo = JSON.parse(user);
        return felhasznalo.admin;
      }
      return false;
  }
  getFelhasznaloByEmail(email: string): Felhasznalo | undefined {
    return FelhasznalokObject.find(felhasznalo => felhasznalo.email === email);
  }
  validateUser(email: string, jelszo: string): boolean {
    const felhasznalo = FelhasznalokObject.find(user => user.email === email && user.jelszo === jelszo);
    if (felhasznalo) {
      localStorage.setItem('user', JSON.stringify(felhasznalo)); // Felhasználó mentése a LocalStorage-ba
      return true;
    }
    return false;
  }
}
