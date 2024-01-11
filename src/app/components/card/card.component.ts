import { Component, Input } from '@angular/core';
import { CardCurso } from '../../interface/card-curso';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent{
  @Input () cardCurso!: CardCurso;
  
  constructor(private router: Router) {}
  
  navigateToCursoDetail(curso: CardCurso) {
    this.router.navigate(['/curso-detail'],  {queryParams: curso});
  }
}
