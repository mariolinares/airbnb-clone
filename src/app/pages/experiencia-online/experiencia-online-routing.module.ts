import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienciaOnlineComponent } from './experiencia-online.component';

const routes: Routes = [
  {
    path: '',
    component: ExperienciaOnlineComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExperienciaOnlineRoutingModule {}
