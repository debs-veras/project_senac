import { Component } from '@angular/core';
import { FiltroService } from '../../services/filtro.service';
@Component({
  selector: 'app-curso-filtro',
  templateUrl: './curso-filtro.component.html',
  styleUrl: './curso-filtro.component.css'
})

export class CursoFiltroComponent {
  constructor(private filtroService: FiltroService) {}
  checked = false;
  indeterminate = false;

  turnoFilter = { manha: false, tarde: false, noite: false };
  modalidadeFilter = { presencial: false, online: false };
  tipoFilter = { livre: false, ead: false, idiomas: false, tecnicos: false };

  categoriaFilter = {
    beleza: false, comercio: false, comunicacao: false, design: false,
    gastronomia: false, idiomas: false, informatica: false, saude: false,
    seguranca: false, turismo: false
  };
  
  aplicarFiltro(){
    this.filtroService.atualizarFiltro({
      turno: this.turnoFilter,
      modalidade: this.modalidadeFilter,
      tipo: this.tipoFilter,
      categoria: this.categoriaFilter
    });
  }

  
  limparModalidade(){
    this.modalidadeFilter = { presencial: false, online: false };
    this.filtroService.atualizarFiltro({
      turno: this.turnoFilter,
      modalidade: this.modalidadeFilter,
      tipo: this.tipoFilter,
      categoria: this.categoriaFilter
    });
  }

  limparCategoria(){
    this.categoriaFilter = {
      beleza: false, comercio: false, comunicacao: false, design: false,
      gastronomia: false, idiomas: false, informatica: false, saude: false,
      seguranca: false, turismo: false
    };
    this.filtroService.atualizarFiltro({
      turno: this.turnoFilter,
      modalidade: this.modalidadeFilter,
      tipo: this.tipoFilter,
      categoria: this.categoriaFilter
    });
  }

  limparTurno(){
    this.turnoFilter = { manha: false, tarde: false, noite: false };
    this.filtroService.atualizarFiltro({
      turno: this.turnoFilter,
      modalidade: this.modalidadeFilter,
      tipo: this.tipoFilter,
      categoria: this.categoriaFilter
    });
  }

  limparTipo(){
    this.tipoFilter = { livre: false, ead: false, idiomas: false, tecnicos: false };
    this.filtroService.atualizarFiltro({
      turno: this.turnoFilter,
      modalidade: this.modalidadeFilter,
      tipo: this.tipoFilter,
      categoria: this.categoriaFilter
    });
  }
}

