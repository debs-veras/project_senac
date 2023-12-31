import { Injectable } from '@angular/core';
import { CardCurso } from '../interface/card-curso';

@Injectable({
  providedIn: 'root'
})

export class CursosService {
  url = 'http://localhost:3000/cursos';

  async getAllHousingLocations(): Promise<CardCurso[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: number): Promise<CardCurso | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }
}
