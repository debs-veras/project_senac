import { Component, ViewChild  } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

export class MenuComponent {
  @ViewChild(MatMenuTrigger) menuTrigger!: MatMenuTrigger;

  iconeClicado: { [key: string]: boolean } = {};
  
  classeCSS: { [key: string]: string } = {
    'classeCurso': 'colorblue',
    'classeUnidade': 'colorblue',
    'classeSenac': 'colorblue'
  };
  
  toggleIcone(botao: string, classe: string){
    this.iconeClicado[botao] = !this.iconeClicado[botao];
    this.classeCSS[classe] = (this.classeCSS[classe] == "colorblue") ? this.classeCSS[classe] = "colororange" : this.classeCSS[classe] = "colorblue";
  }
}
