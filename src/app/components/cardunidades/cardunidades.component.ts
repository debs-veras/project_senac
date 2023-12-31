import { Component, Input } from '@angular/core';
import { Unidades } from '../../interface/unidades';

@Component({
  selector: 'app-cardunidades',
  templateUrl: './cardunidades.component.html',
  styleUrl: './cardunidades.component.css'
})

export class CardunidadesComponent {
  @Input () cardunidades!: Unidades;
}
