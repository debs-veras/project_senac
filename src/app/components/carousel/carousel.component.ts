import { Component, OnInit } from '@angular/core';
import { CardCurso } from "../../interface/card-curso"
import { CursosService } from '../../services/cursos.service';
import { Router } from '@angular/router';
import { FiltroService } from '../../services/filtro.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})

export class CarouselComponent implements OnInit{
  listas: CardCurso[] = [];
  aux : CardCurso [] = [];
  aux3 : CardCurso [] = [];
  aux4 : CardCurso [] = [];
  
  larguraDaTela: number = window.innerWidth;
  aux2: { [categoria: string]: string } = {
    'beleza': "Beleza e Estética",
    'gastronomia': "Gastronomia e Alimentação",
    'comercio': "Comércio e Vendas",
    'comunicacao': "Comunicação", 
    'design': "Desing",
    'idiomas': "Idiomas",
    'informatica': "Informática",
    'saude': "Saúde",
    'segurança': "Segurança",
    'turismo': "Turismo",
    'presencial': "Presencial",
    'online': "Online",
    'manha': "Manhã",
    'tarde': "Tarde",
    'noite': "Noite",
    'livre': "Livre", 
    'ead': "EAD", 
    'tecnicos': "Técnico"
  };
  
  pag = true;
  filtros: any = {};
  start = 0;
  pause = 0;
  
  constructor(private sharedService: SharedService, private cursosService: CursosService, private router: Router, private filtroService: FiltroService) {}
  
  mudarEstiloNoPai(novoEstilo: string){
    this.sharedService.modificarEstilo(novoEstilo);
  }

  obterTodosCursos(){
    this.cursosService.getAllHousingLocations().then(cursos => {
      this.listas = cursos;
      this.aux4 = cursos;
      if(this.larguraDaTela >= 720 && this.larguraDaTela <= 1024)
        this.pause = 2;
      else if(this.larguraDaTela >= 320 && this.larguraDaTela < 720) 
        this.pause = 1;
      else
        this.pause = 3; 
      this.aux = cursos.slice(0, this.pause);
    });
  }
   
  filtro(){
    this.aux = [];

    for(const categoria in this.filtros.categoria){
      if(this.filtros.categoria[categoria]){
        this.aux3 = this.aux4.filter((curso : CardCurso) => {
          return curso.typecurso === this.aux2[categoria] && this.aux.indexOf(curso) === -1;
        })
        for(const curso in this.aux3) 
          this.aux.push(this.aux3[curso]);       
      }
    } 

    for(const categoria in this.filtros.modalidade){
      if(this.filtros.modalidade[categoria]){
        this.aux3 = this.aux4.filter((curso : CardCurso) => {
          return curso.modality === this.aux2[categoria] && this.aux.indexOf(curso) === -1;
        })
        for(const curso in this.aux3)
          this.aux.push(this.aux3[curso])
      }
    } 
    
    for(const categoria in this.filtros.turno){
      if(this.filtros.turno[categoria]){
        this.aux3 = this.aux4.filter((curso : CardCurso) => {
          return curso.turno === this.aux2[categoria] && this.aux.indexOf(curso) === -1;
        })
        for(const curso in this.aux3)
          this.aux.push(this.aux3[curso])
      }
    } 

    for(const categoria in this.filtros.tipo){
      if(this.filtros.tipo[categoria]){
        this.aux3 = this.aux4.filter((curso : CardCurso) => {
          return curso.type === this.aux2[categoria] && this.aux.indexOf(curso) === -1;
        })
        for(const curso in this.aux3)
          this.aux.push(this.aux3[curso])
      }
    } 
    
    if(this.aux.length <= 0)
      this.obterTodosCursos();
    else{
      this.listas = this.aux
      this.aux = this.listas.slice(0, this.pause);
    }
  }
      
  ngOnInit( ) : void {
    this.filtroService.filtro$.subscribe((filtros) => {
      this.filtros = filtros;
      this.filtro();
    }); 
    this.navigateToNewPage();
  }
  
  nextSlider(){
    if(!(this.pause >= this.listas.length)){
      this.pause++;
      this.start++;
      this.aux = this.listas.slice(this.start, this.pause);
    }
  }
  
  backSlider(){
    if(this.start > 0){
      this.pause--;
      this.start--;
      this.aux = this.listas.slice(this.start, this.pause);
    } 
  }
  
  navigateToNewPage(){  
    if(this.pag){
      this.router.navigate(['/']);
      this.obterTodosCursos();
      this.mudarEstiloNoPai('center');
    }
    else{
      this.router.navigate(['/curso-filtro']);
      this.mudarEstiloNoPai('bet');
    }
    this.pag = !this.pag;
  }
}
