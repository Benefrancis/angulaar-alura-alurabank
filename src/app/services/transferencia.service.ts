import { Transferencia } from './../models/transferencia';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaDeTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httClient: HttpClient) {
    this.listaDeTransferencia = [];
  }

  todas(): Observable<Transferencia[]> {
    return this.httClient.get<Transferencia[]>(this.url);
  }

  get transferecias() {
    return this.listaDeTransferencia;
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.hidratar(transferencia);
    //  this.listaDeTransferencia.push(transferencia);
    return this.httClient.post<Transferencia>(this.url, transferencia);
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
