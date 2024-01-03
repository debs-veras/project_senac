import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoFiltroComponent } from './pages/curso-filtro/curso-filtro.component';

const routes: Routes = [
  { 
    path: 'curso-filtro', 
    component: CursoFiltroComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
