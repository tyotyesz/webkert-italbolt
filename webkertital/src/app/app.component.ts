import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { Felhasznalo, FelhasznalokObject } from './shared/models/felhasznalok';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatListModule,
    RouterLinkActive,
    RouterLink,
    MatIconModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  FelhasznalokObject = FelhasznalokObject;
  constructor(private router: Router) {}
  isFomenuRoute(){
    return this.router.url === '/fomenu' || 
    this.router.url === '/alkoholos' || 
    this.router.url === '/uditok' || 
    this.router.url === '/kulonleges' ||
    this.router.url === '/receptek';
  }
  isLoggedIn(): boolean {
    const user = localStorage.getItem('felhasznalo');
    return user !== null;
  }
  isAdmin(): boolean {
    const user = localStorage.getItem('felhasznalo');
    if (user) {
      const felhasznalo: Felhasznalo = JSON.parse(user);
      return felhasznalo.admin;
    }
    return false;
  }
}
