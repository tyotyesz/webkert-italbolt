import { Component } from '@angular/core';
import { FelhasznaloService } from '../../shared/services/felhasznalo.service';
import { Felhasznalo, FelhasznalokObject } from '../../shared/models/felhasznalok';

@Component({
  selector: 'app-profil',
  imports: [],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss'
})
export class ProfilComponent {
  constructor(private felhasznaloService: FelhasznaloService) {}
  

  isLoggedIn(): boolean{
    return this.felhasznaloService.isLogged();
  }

  isAdmin(): boolean{
    return this.felhasznaloService.isAdministrator();
  }

  getAdatok(): any{
    return this.felhasznaloService.getFelhasznalo();
  }
  getVezeteknev(): string | null {
    return this.felhasznaloService.getFelhasznalo()?.vezeteknev || null;
  }

  getKeresztnev(): string | null {
    return this.felhasznaloService.getFelhasznalo()?.keresztnev || null;
  }

  getEmail(): string | null {
    return this.felhasznaloService.getFelhasznalo()?.email || null;
  }

  getTelefonszam(): string | null {
    return this.felhasznaloService.getFelhasznalo()?.telefonszam || null;
  }

  getSzallitasiAdatok(): string | null {
    return this.felhasznaloService.getFelhasznalo()?.szallitasi_adatok || null;
  }

  getFizetesiAdatok(): string | null {
    return this.felhasznaloService.getFelhasznalo()?.fizetesi_adatok || null;
  }

  getHirlevelSub(): string | null {
    return this.felhasznaloService.getFelhasznalo()?.hirlevelsub || null;
  }

}
