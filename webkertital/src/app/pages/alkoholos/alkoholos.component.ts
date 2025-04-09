import { Component } from '@angular/core';
import { Termek, TermekekObject } from '../../shared/models/termekek';

@Component({
  selector: 'app-alkoholos',
  imports: [],
  templateUrl: './alkoholos.component.html',
  styleUrl: './alkoholos.component.scss'
})
export class AlkoholosComponent {
  TermekObject = TermekekObject;
}
