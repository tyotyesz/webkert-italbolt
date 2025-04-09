import { Component } from '@angular/core';
import { FelhasznaloService } from '../../shared/services/felhasznalo.service';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-bejelentkezes',
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, FormsModule, MatButtonModule],
  templateUrl: './bejelentkezes.component.html',
  styleUrl: './bejelentkezes.component.scss'
})
export class BejelentkezesComponent {
  loginForm!: FormGroup;
  email: string = '';
  jelszo: string = '';
  invalid: boolean = false;

  constructor(private felhasznaloService: FelhasznaloService, private router: Router) { }

  isLoggedIn(): boolean {
    return this.felhasznaloService.isLoggedIn();
  }
  isAdmin(): boolean {
    return this.felhasznaloService.isAdmin();    
  }
  isInvalid(): boolean {
    const felhasznalo = this.felhasznaloService.getFelhasznaloByEmail(this.email);
    if (!felhasznalo || felhasznalo.jelszo !== this.jelszo) {
      this.invalid = true;
      return true;
    }
    this.invalid = false;
    return false;
  }
  onSubmit(): void {
    const isValid = this.felhasznaloService.validateUser(this.email, this.jelszo);
    if (isValid) {
      this.invalid = false;
      this.router.navigate(['/fomenu']); // Sikeres bejelentkezés után átirányítás
    } else {
      this.invalid = true;
    }
  }
}
