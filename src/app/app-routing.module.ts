import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoFiltroComponent } from './components/curso-filtro/curso-filtro.component';
import { DetailscategoryComponent } from './pages/detailscategory/detailscategory.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailcursoComponent } from './pages/detailcurso/detailcurso.component';
import { DetailunidadeComponent } from './pages/detailunidade/detailunidade.component';
import { DetailcompanyComponent } from './pages/detailcompany/detailcompany.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: 'curso-filtro', component: CursoFiltroComponent}
    ]
  },
  { 
    path: 'curso-category', 
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
