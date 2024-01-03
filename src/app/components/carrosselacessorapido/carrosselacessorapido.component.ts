import { Component } from '@angular/core';
import { Acessorapido} from "../../interface/acessorapido"

@Component({
  selector: 'app-carrosselacessorapido',
  templateUrl: './carrosselacessorapido.component.html',
  styleUrl: './carrosselacessorapido.component.css'
})

export class CarrosselacessorapidoComponent {
  listas: Acessorapido[] = [];
  aux : Acessorapido [] = [];
  responsiveOptions: any[] | undefined;
  classeCSS: { [key: number]: string } = {};

  obterTodosAcessos() {
    this.listas = [
      {
        id: 0,
        title: "Senac Gratuidade", 
        subtitle: "Estude com a gente sem pagar nada", 
        button:"Saiba mais", 
        imgurl:"card1"
      },
      {
        id: 1,
        title: "Turmas abertas para 2024", 
        subtitle: "Estude com a gente sem pagar nada", 
        button: "Inscreva-se", 
        imgurl:"card2"
      },
      {
        id: 2,
        title: "Senac Empregabilidade", 
        subtitle: "Aprendizado conectado com o mercado", 
        button: "Inscreva-se", 
        imgurl:"card3"
      },  
      {
        id: 3,
        title: "Senac Gratuidade", 
        subtitle: "Estude com a gente sem pagar nada", 
        button:"Saiba mais", 
        imgurl:"card1"
      }
     ];
      this.aux = this.listas.slice(0, 3);
  }
  
  start = 0;
  pause = 3;
  
  ngOnInit( ) : void {
    this.obterTodosAcessos();
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

  selectcard(index: number){
    this.pause = this.listas.length / 2;
    if (index >= 1 && index <= this.listas.length){
      this.start = index - 1;
      this.pause = Math.min(index + 2, this.listas.length);
      this.aux = this.listas.slice(this.start, this.pause);
    }

    console.log(this.start, this.pause, index);
  }
}
