import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/services/crud/crud.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private crud: CrudService) { }

  getMovements() {
    return this.crud.get(`movimientos`);
  }

  getCard() {
    return this.crud.get(`tarjetas`);
  }

  getBalances() {
    return this.crud.get(`saldos`);
  }

  getAccounts() {
    return this.crud.get(`cuenta`);
  }


}
