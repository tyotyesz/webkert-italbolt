import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { Felhasznalo, FelhasznalokObject } from './shared/models/felhasznalok';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FelhasznaloService } from './shared/services/felhasznalo.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatListModule,
    RouterLinkActive,
    RouterLink,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private router: Router, private felhasznaloService: FelhasznaloService) {}
  isFomenuRoute(){
    return this.router.url !== '/igazolas';
  }
  
  isLoggedIn(): boolean {
    return this.felhasznaloService.isLoggedIn();
  }
  isAdmin(): boolean {
    return this.felhasznaloService.isAdmin();
  }
}
