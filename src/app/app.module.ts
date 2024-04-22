import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirbnbCardComponent } from './core/components/airbnb-card/airbnb-card.component';
import { CategoriesMenuComponent } from './core/components/categories-menu/categories-menu.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HeaderComponent } from './core/components/header/header.component';
import { HomeComponent } from './core/components/home/home.component';
import { LayoutComponent } from './core/components/layout/layout.component';
import { SearchComponent } from './core/components/search/search.component';
import { AlojamientoComponent } from './pages/alojamiento/alojamiento.component';
import { ExperienciaOnlineComponent } from './pages/experiencia-online/experiencia-online.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    CategoriesMenuComponent,
    LayoutComponent,
    AirbnbCardComponent,
    FooterComponent,
    ExperienciaOnlineComponent,
    ExperienciaComponent,
    AlojamientoComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
