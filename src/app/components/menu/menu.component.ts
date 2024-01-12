import { Component, ViewChild  } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { Categoria } from '../../interface/categoria';
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
        cor: "orange",
        urlimgbanner: "../../../assets/images/categorias/beleza/banner.jpg", 
        img1: "../../../assets/images/categorias/beleza/img1.jpg",
        img2: "../../../assets/images/categorias/beleza/img2.jpg"
      },
      {
        id: 1,
        name: "Tecnologia",
        cor: "green-dark",
        urlimgbanner: "../../../assets/images/categorias/tecnologia/banner.jpg", 
        img1: "../../../assets/images/categorias/beleza/img1.jpg",
        img2: "../../../assets/images/categorias/beleza/img2.jpg"
      },
     ];
  }

  constructor(private router: Router) {}
  
  navigateToCursoDetail(curso: Categoria) {
    this.router.navigate(['/curso-detail'],  {queryParams: curso});
  }

  toggleIcone(botao: string, classe: string){
    this.iconeClicado[botao] = !this.iconeClicado[botao];
    this.classeCSS[classe] = (this.classeCSS[classe] == "colorblue") ? this.classeCSS[classe] = "colororange" : this.classeCSS[classe] = "colorblue";
  }
}
