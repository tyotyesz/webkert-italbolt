import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FomenuComponent } from './pages/fomenu/fomenu.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', redirectTo: '/igazolas', pathMatch: 'full'},
    { path: 'fomenu', component: FomenuComponent},
    { path: 'igazolas', component: AppComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
