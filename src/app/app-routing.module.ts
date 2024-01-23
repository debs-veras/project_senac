import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoFiltroComponent } from './components/curso-filtro/curso-filtro.component';
import { DetailscategoryComponent } from './pages/detailscategory/detailscategory.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailcursoComponent } from './pages/detailcurso/detailcurso.component';
import { DetailunidadeComponent } from './pages/detailunidade/detailunidade.component';
import { DetailcompanyComponent } from './pages/detailcompany/detailcompany.component';
import { PsgComponent } from './pages/psg/psg.component';
import { NewsComponent } from './pages/news/news.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: 'curso-filtro', component: CursoFiltroComponent}
    ]
  },
  { 
    path: 'curso-category/:id', 
    component: DetailscategoryComponent
  }, 
  { 
    path: 'curso-detail', 
    component: DetailcursoComponent
  },
  { 
    path: 'curso-unidade', 
    component: DetailunidadeComponent
  },
  { 
    path: 'curso-company', 
    component: DetailcompanyComponent
  },
  { 
    path: 'curso-psg', 
    component: PsgComponent
  },
  { 
    path: 'news', 
    component: NewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
