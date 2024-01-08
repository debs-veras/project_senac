import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SharedService{
  estiloModificado = new EventEmitter<string>();

  modificarEstilo(novoEstilo: string){
    this.estiloModificado.emit(novoEstilo);
  }
}
