import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoFiltroComponent } from './components/curso-filtro/curso-filtro.component';
import { DetailscursoComponent } from './pages/detailscurso/detailscurso.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: 'curso-filtro', component: CursoFiltroComponent}
    ]
  },
  { 
    path: 'curso-detail', 
    component: DetailscursoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
