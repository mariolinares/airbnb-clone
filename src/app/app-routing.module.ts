import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlojamientoComponent } from './core/components/alojamiento/alojamiento.component';
import { ExperienciaOnlineComponent } from './core/components/experiencia-online/experiencia-online.component';
import { ExperienciaComponent } from './core/components/experiencia/experiencia.component';
import { HomeComponent } from './core/components/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'alojamiento',
    component: AlojamientoComponent,
  },
  {
    path: 'experiencia',
    component: ExperienciaComponent,
  },
  {
    path: 'experiencia-online',
    component: ExperienciaOnlineComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
