import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardCurso } from '../../interface/card-curso';

@Component({
  selector: 'app-detailscurso',
  templateUrl: './detailscurso.component.html',
  styleUrls: ['./detailscurso.component.css']
})

export class DetailscursoComponent implements OnInit{
  curso !: CardCurso

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.curso = {
        id: params['id'],
        type: params['type'],
        name: params['name'],
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

