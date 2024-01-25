import { Component, Input } from '@angular/core';
import { CardCurso } from '../../interface/card-curso';
import { Router } from '@angular/router';

function normalizeString(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-') 
    .toLowerCase();
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent{
  @Input () cardCurso!: CardCurso;
  
  constructor(private router: Router) {}
  
  navigateToCursoDetail(curso: CardCurso) {
    this.router.navigate(['/curso-detail', normalizeString(curso.name)],  {queryParams: curso});
  }
}
