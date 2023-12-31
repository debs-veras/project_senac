import { Component, OnInit } from '@angular/core';
import { CardCurso } from "../../interface/card-curso"
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})

export class CarouselComponent implements OnInit {
  listas: CardCurso[] = [];

  constructor(private cursosService: CursosService) {}

  obterTodosCursos(){
    this.cursosService.getAllHousingLocations().then(cursos => {
      this.listas = cursos;
      console.log('Cursos:', cursos);
      this.aux = cursos.slice(0, this.numitem);
    });
  }
   
  aux : CardCurso [] = [ ];
   
  numitem = 3;
  itemUltimo = 3;
  start = 0;
  pause = 3;

  ngOnInit( ) : void {
    this.obterTodosCursos();
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
}
