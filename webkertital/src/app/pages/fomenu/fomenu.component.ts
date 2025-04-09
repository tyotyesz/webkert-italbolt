import { Component } from '@angular/core';
import { Termek, TermekekObject } from '../../shared/models/termekek';
import { Felhasznalo, FelhasznalokObject } from '../../shared/models/felhasznalok';

@Component({
  selector: 'app-fomenu',
  imports: [],
  templateUrl: './fomenu.component.html',
  styleUrl: './fomenu.component.scss'
})
export class FomenuComponent {
  TermekekObject = TermekekObject;
  FelhasznalokObject = FelhasznalokObject;

}
