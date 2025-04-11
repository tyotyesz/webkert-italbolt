import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router, RouterLink, RouterLinkActive} from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FelhasznaloService } from './shared/services/felhasznalo.service';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatListModule,
    RouterLinkActive,
    RouterLink,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
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
    return this.felhasznaloService.isLogged();
  }
  isAdmin(): boolean {
    return this.felhasznaloService.isAdministrator();
  }
}
