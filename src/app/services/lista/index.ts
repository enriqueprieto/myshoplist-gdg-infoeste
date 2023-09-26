import { Injectable } from '@angular/core';
import { Lista } from 'src/app/models/lista';
import { UuidGeneratorService } from '../uuid-generator';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  private localStorageKey: string = 'listas';
  constructor(
    private _uuidService: UuidGeneratorService
  ) { }

  private _getFromStorage() {
    const listasStorage = localStorage.getItem(this.localStorageKey);

    return listasStorage ? JSON.parse(listasStorage) : {};
  }

  private _saveIntoStorage(listas: {} = {}) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(listas));
  }

  save(lista: Lista) {
    const model = new Lista(lista);
    const listasObj = this._getFromStorage();
    if (!model.id) {
      model.id = this._uuidService.generateUuid();
    }

    listasObj[model.id] = model;

    this._saveIntoStorage(listasObj);
  }

  remove(lista: Lista) {
    const model = new Lista(lista);
    const listasObj = this._getFromStorage();
    if (!model.id) {
      return;
    }

    delete listasObj[model.id];

    this._saveIntoStorage(listasObj);
  }

  getListas() {
    const listasObj = this._getFromStorage();
    const lista = Object.keys(listasObj).map((key) => {
      return new Lista(listasObj[key]);
    });
    return lista;
  }
}
