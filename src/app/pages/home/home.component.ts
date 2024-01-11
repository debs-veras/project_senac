import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  estiloAtual = 'center';

  constructor(private sharedService: SharedService){
    this.sharedService.estiloModificado.subscribe(novoEstilo => this.estiloAtual = novoEstilo);
  }
}
