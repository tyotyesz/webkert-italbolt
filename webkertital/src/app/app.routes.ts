import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FomenuComponent } from './pages/fomenu/fomenu.component';
import { UditokComponent } from './pages/uditok/uditok.component';
import { AlkoholosComponent } from './pages/alkoholos/alkoholos.component';
import { KulonlegesComponent } from './pages/kulonleges/kulonleges.component';
import { ReceptekComponent } from './pages/receptek/receptek.component';
import { AppComponent } from './app.component';
import { IgazolasComponent } from './pages/igazolas/igazolas.component';

export const routes: Routes = [
    { path: '', redirectTo: 'igazolas', pathMatch: 'full',},
    { path: 'igazolas', component: IgazolasComponent},
    { path: 'fomenu', component: FomenuComponent},
    { path: 'uditok', component: UditokComponent},
    { path: 'alkoholos', component: AlkoholosComponent},
    { path: 'kulonleges', component: KulonlegesComponent},
    { path: 'receptek', component: ReceptekComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
