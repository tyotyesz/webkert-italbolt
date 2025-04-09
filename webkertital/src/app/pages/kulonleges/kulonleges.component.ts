import { Component } from '@angular/core';
import { Termek, TermekekObject } from '../../shared/models/termekek';

@Component({
  selector: 'app-kulonleges',
  imports: [],
  templateUrl: './kulonleges.component.html',
  styleUrl: './kulonleges.component.scss'
})
export class KulonlegesComponent {
  TermekObject = TermekekObject;
}
