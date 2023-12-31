import { Component } from '@angular/core';
import { Noticias } from '../../interface/noticias';

@Component({
  selector: 'app-carrosselnoticias',
  templateUrl: './carrosselnoticias.component.html',
  styleUrl: './carrosselnoticias.component.css'
})

export class CarrosselnoticiasComponent {
  listas: Noticias[] = [];
  aux : Noticias [] = [];

  responsiveOptions: any[] | undefined;

  obterTodosNoticias(){
    this.listas = [
      {
        name: "Competição de Robótica", 
        detail: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.", 
        date:"26/12/2023 ", 
        time:"5 min",
        type: "Tecnologia",
        imgurl: "../../../assets/images/noticias/Senac_Tecnologia_Creditos_JrPanela.jpg"
      },
      {
        name: "Competição de Robótica", 
        detail: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.", 
        date:"26/12/2023 ", 
        time:"5 min",
        type: "Tecnologia",
        imgurl: "../../../assets/images/unidades/assu.jpeg"
      },
      {
        name: "Competição de Robótica", 
        detail: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.", 
        date:"26/12/2023 ", 
        time:"5 min",
        type: "Tecnologia",
        imgurl: "../../../assets/images/unidades/assu.jpeg"
      },
      {
        name: "Competição de Robóticaaa", 
        detail: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.", 
        date:"26/12/2023 ", 
        time:"5 min",
        type: "Tecnologia",
        imgurl: "../../../assets/images/banner1.png"
      }
     ];
    this.aux = this.listas.slice(0, this.numitem);
  }

  numitem = 3;
  itemUltimo = 3;
  start = 0;
  pause = 3;
  
  ngOnInit( ) : void {
    this.obterTodosNoticias();
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
