import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { CardacessorapidoComponent } from './components/cardacessorapido/cardacessorapido.component';
import { CardComponent } from './components/card/card.component';
import { CardnoticiasComponent } from './components/cardnoticias/cardnoticias.component';
import { CardunidadesComponent } from './components/cardunidades/cardunidades.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarrosselacessorapidoComponent } from './components/carrosselacessorapido/carrosselacessorapido.component';
import { CarrosselunidadesComponent } from './components/carrosselunidades/carrosselunidades.component';
import { CarrosselnoticiasComponent } from './components/carrosselnoticias/carrosselnoticias.component';
import { CursoFiltroComponent } from './pages/curso-filtro/curso-filtro.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconsModule } from './icons/icons.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    BannerComponent,
    CardacessorapidoComponent,
    CardComponent,
    CardunidadesComponent,
    CarouselComponent,
    CarrosselacessorapidoComponent,
    CardnoticiasComponent,
    CarrosselunidadesComponent,
    CarrosselnoticiasComponent,
    CursoFiltroComponent
  ],
  imports: [
    MatCheckboxModule,
    FormsModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    CarouselModule.forRoot(),
    IconsModule,
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
