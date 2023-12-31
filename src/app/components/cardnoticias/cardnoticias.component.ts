import { Component, Input } from '@angular/core';
import { Noticias } from '../../interface/noticias';

@Component({
  selector: 'app-cardnoticias',
  templateUrl: './cardnoticias.component.html',
  styleUrl: './cardnoticias.component.css'
})

export class CardnoticiasComponent {
  @Input () cardnoticias!: Noticias;
}
