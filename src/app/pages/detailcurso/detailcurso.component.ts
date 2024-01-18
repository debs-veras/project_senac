import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardCurso } from '../../interface/card-curso';
@Component({
  selector: 'app-detailcurso',
  templateUrl: './detailcurso.component.html',
  styleUrl: './detailcurso.component.css'
})
export class DetailcursoComponent implements OnInit{
  curso !: CardCurso
  iconeClicado: { [key: string]: boolean } = {};
  text: { [key: string]: string } = {};

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.curso = {
        id: params['id'],
        name: params['name'],
        type: params['type'],
        modality: params['modality'],
        duration: params['duration'],
        typecurso: params['typecurso'],
        urlimg: params['urlimg'],
        turno: params['turno'],
        cor: params['cor']
      };
    });
  }

  toggleIcone(botao: string){

    this.iconeClicado[botao] = !this.iconeClicado[botao];
    if(this.iconeClicado[botao])
      this.text[botao] = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    else{
      this.text[botao] = "";
    }
  }
}
