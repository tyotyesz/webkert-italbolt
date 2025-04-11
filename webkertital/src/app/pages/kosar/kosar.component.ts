import { Component } from '@angular/core';
import { FelhasznaloService } from '../../shared/services/felhasznalo.service';
import { KosarMennyisegObject } from '../../shared/models/kosarmennyiseg';
import { KosarService } from '../../shared/services/kosar.service';
import { Router, RouterLink, RouterLinkActive} from '@angular/router';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-kosar',
  imports: [
    MatListModule,
    RouterLink
  ],
  templateUrl: './kosar.component.html',
  styleUrl: './kosar.component.scss'
})
export class KosarComponent {
  kosarMennyiseg = KosarMennyisegObject;
  constructor(
    private felhasznaloService: FelhasznaloService,
  ){}

  isLoggedIn(): boolean{
    return this.felhasznaloService.isLogged();
  }
}
