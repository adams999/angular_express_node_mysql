import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficaBarrasComponent } from './components/grafica-barras/grafica-barras.component';
import { GraficaTortaComponent } from './components/grafica-torta/grafica-torta.component';
import { HomeComponent } from './components/home/home.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';
import { LoginGuardian } from './guardians/login.guardian.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'usuarios',
    component: HomeComponent,
    children: [
      { path: 'charPie', component: GraficaTortaComponent,canActivate: [LoginGuardian], },
      { path: 'charBar', component: GraficaBarrasComponent,canActivate: [LoginGuardian], },
    ],
  },
  { path: '**', component: NoEncontradoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
