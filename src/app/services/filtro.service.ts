import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class FiltroService {
  private filtroSubject = new BehaviorSubject<any>({});

  get filtro$() {
    return this.filtroSubject.asObservable();
  }

  atualizarFiltro(filtro: any) {
    this.filtroSubject.next(filtro);
  }
}
