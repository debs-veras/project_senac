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
}
