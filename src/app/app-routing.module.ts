import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/alojamiento/alojamiento.module').then(
            (m) => m.AlojamientoModule
          ),
      },
      {
        path: 'experiencia',
        loadChildren: () =>
          import('./pages/experiencia/experiencia.module').then(
            (m) => m.ExperienciaModule
          ),
      },
      {
        path: 'experiencia-online',
        loadChildren: () =>
          import('./pages/experiencia-online/experiencia-online.module').then(
            (m) => m.ExperienciaOnlineModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
