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
  larguraDaTela: number = window.innerWidth;

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

    if(this.larguraDaTela >= 720 && this.larguraDaTela <= 1024)
      this.pause = 2;
    else if(this.larguraDaTela >= 320 && this.larguraDaTela < 720) 
      this.pause = 1;
    else
      this.pause = 3; 
    this.aux = this.listas.slice(0, this.pause);
  }

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
