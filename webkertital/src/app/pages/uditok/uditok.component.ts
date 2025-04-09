import { Component } from '@angular/core';
import { Termek, TermekekObject } from '../../shared/models/termekek';

@Component({
  selector: 'app-uditok',
  imports: [],
  templateUrl: './uditok.component.html',
  styleUrl: './uditok.component.scss'
})
export class UditokComponent {
  TermekObject = TermekekObject;
}
