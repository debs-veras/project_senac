import { Component, OnInit } from '@angular/core';
import { CardCurso } from "../../interface/card-curso"
import { CursosService } from '../../services/cursos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})

export class CarouselComponent implements OnInit {
  listas: CardCurso[] = [];
  larguraDaTela: number = window.innerWidth;
  constructor(private cursosService: CursosService, private router: Router) {}
  
  obterTodosCursos(){
    this.cursosService.getAllHousingLocations().then(cursos => {
      this.listas = cursos;
      if(this.larguraDaTela >= 720 && this.larguraDaTela <= 1024)
        this.pause = 2;
      else if(this.larguraDaTela >= 320 && this.larguraDaTela < 720) 
        this.pause = 1;
      else
        this.pause = 3; 
      this.aux = cursos.slice(0, this.pause);
    });
  }
  
  aux : CardCurso [] = [ ];
  pag = true;
  
  start = 0;
  pause = 0;
  
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

  navigateToNewPage(){
    if(this.pag)
      this.router.navigate(['/curso-filtro']);
    else
      this.router.navigate(['/']);
    this.pag = !this.pag;
  }
}
