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

  obterTodosAcessos() {
    this.listas = [
      {
        title: "Senac Gratuidade", 
        subtitle: "Estude com a gente sem pagar nada", 
        button:"Saiba mais", 
        imgurl:"card1"
      },
      {
        title: "Turmas abertas para 2024", 
        subtitle: "Estude com a gente sem pagar nada", 
        button: "Inscreva-se", 
        imgurl:"card2"
      },
      {
        title: "Senac Empregabilidade", 
        subtitle: "Aprendizado conectado com o mercado", 
        button: "Inscreva-se", 
        imgurl:"card3"
      }
     ];
      this.aux = this.listas.slice(0, this.numitem);
  }
   
  numitem = 3;
  itemUltimo = 3;
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
}
