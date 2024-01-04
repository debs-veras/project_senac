import { Component } from '@angular/core';
import { Unidades } from '../../interface/unidades'
 
@Component({
  selector: 'app-carrosselunidades',
  templateUrl: './carrosselunidades.component.html',
  styleUrl: './carrosselunidades.component.css'
})

export class CarrosselunidadesComponent {
  listas: Unidades[] = [];
  aux : Unidades [] = [];
  larguraDaTela: number = window.innerWidth;

  obterTodosUnidades(){
    this.listas = [
      {
        name: "Assú", 
        time: "Segunda a sexta-feira, das 8h às 17h", 
        phone:"(84) 3331-1585", 
        email:"E-mail: ead@rn.senac.br",
        location: "Rua 24 de junho, 1074 - Centro Assú - RN - Cep: 59.650-000",
        imgurl: "../../../assets/images/unidades/assu.jpeg"
      },
      {
        name: "Barreira Roxa", 
        time: "Segunda a sexta-feira, das 7h às 22h e aos sábados das 8h às 12h", 
        phone:"(84) 4005-1650", 
        email:"E-mail: ead@rn.senac.br",
        location: "Av. Senador Dinarte Mariz, 4020 - Via Costeira Natal - RN - Cep: 59.090-000",
        imgurl: "../../../assets/images/unidades/barraroxa.jpg"
      },
      {
        name: "Caicó", 
        time: "Segunda a sexta-feira, das 8h às 17h.", 
        phone:"(84) 3421-3933", 
        email:"E-mail: ead@rn.senac.br",
        location: "Rua Dr. Renato Dantas, 543 - CentroCaicó - RN - Cep: 59.300-000",
        imgurl: "../../../assets/images/unidades/caico.jpg"
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
    this.obterTodosUnidades();
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
