import { Component, Input } from '@angular/core';
import { Acessorapido } from '../../interface/acessorapido';

@Component({
  selector: 'app-cardacessorapido',
  templateUrl: './cardacessorapido.component.html',
  styleUrl: './cardacessorapido.component.css'
})

export class CardacessorapidoComponent {
  @Input () cardacessorapido!: Acessorapido;
}
