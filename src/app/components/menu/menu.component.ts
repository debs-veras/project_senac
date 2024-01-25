import { Component, ViewChild  } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { Categoria } from '../../interface/categoria';

function normalizeString(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-') 
    .toLowerCase();
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

export class MenuComponent {
  @ViewChild(MatMenuTrigger) menuTrigger!: MatMenuTrigger;
  listas: Categoria[] = [];
  iconeClicado: { [key: string]: boolean } = {};
  
  classeCSS: { [key: string]: string } = {
    'classeCurso': 'colorblue',
    'classeUnidade': 'colorblue',
    'classeSenac': 'colorblue'
  };

  ngOnInit( ) : void {
    this.listas = [
      {
        id: 0,
        name: "Beleza e Estética",
        cor: "#F06A0F",
        background: "backorange",
        urlimgbanner: "../../../assets/images/categorias/beleza/banner.jpg", 
        img1: "../../../assets/images/categorias/beleza/img1.jpg",
        img2: "../../../assets/images/categorias/beleza/img2.jpg"
      },
      {
        id: 1,
        name: "Tecnologia",
        cor: "#447EF2",
        background: "backblue",
        urlimgbanner: "../../../assets/images/categorias/tecnologia/banner.jpg", 
        img1: "../../../assets/images/categorias/tecnologia/img1.jpg",
        img2: "../../../assets/images/categorias/tecnologia/img2.jpg"
      },
     ];
  }

  constructor(private router: Router) {}
  
  navigateToCursoDetail(curso: Categoria){
    this.router.navigate(['/curso-category', normalizeString(curso.name)],  {queryParams: curso});
    console.log(normalizeString(curso.name))
  }
  
  navigateToUnidadeDetail(){
    this.router.navigate(['/curso-unidade']);
  }

  navigateToCompanyDetail(){
    this.router.navigate(['/curso-company']);
  }

  navigateToPsgDetail(){
    this.router.navigate(['/curso-psg']);
  }
  
  navigateToNewsDetail(){
    this.router.navigate(['/news']);
  }

  toggleIcone(botao: string, classe: string){
    this.iconeClicado[botao] = !this.iconeClicado[botao];
    this.classeCSS[classe] = (this.classeCSS[classe] == "colorblue") ? this.classeCSS[classe] = "colororange" : this.classeCSS[classe] = "colorblue";
  }
}
