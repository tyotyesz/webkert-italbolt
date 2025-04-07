import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'igazolas',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private router: Router) {}

  navigateToHome(): void {
    this.router.navigate(['fomenu']);
  }

  openYoutubeVideo(): void {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  }
}
