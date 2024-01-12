import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from '../../interface/categoria';

@Component({
  selector: 'app-detailscurso',
  templateUrl: './detailscategory.component.html',
  styleUrls: ['detailscategory.component.css']
})

export class DetailscategoryComponent implements OnInit{
  curso !: Categoria

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.curso = {
        id: params['id'],
        name: params['name'],
        cor: params['cor'],
        urlimgbanner: params['urlimgbanner'],
        background: params['background'],
        img1: params['img1'],
        img2: params['img2']
      };
    });
    console.log(this.curso.cor)
  }

}

