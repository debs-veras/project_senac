import { Component, Input } from '@angular/core';
import { SharedService } from './services/shared.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  @Input() pag : any;
  estiloAtual = 'center';

  constructor(private sharedService: SharedService) {
    this.sharedService.estiloModificado.subscribe(novoEstilo => this.estiloAtual = novoEstilo);
  }
 
  title = 'project_senac';
}
