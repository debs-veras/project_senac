import { Component, ViewChild  } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

export class MenuComponent {
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  classeCSS: string = 'colorblue';

  iconeClicado: boolean = false;

  toggleIcone(){
    this.iconeClicado = !this.iconeClicado;

  }

  abrirMenu(){
    this.trigger.openMenu();
    this.toggleIcone();
  }

  fecharMenu(){
    this.trigger.closeMenu();
    this.toggleIcone();
  }
}
