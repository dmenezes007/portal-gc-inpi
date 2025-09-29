// DENTRO DE: src/app/core/data.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getMapeamento(): Observable<any[]> {
    return this.http.get<any[]>('./assets/dados_para_app/mapeamento.json');
  }

  getDiagnostico(): Observable<any[]> {
    return this.http.get<any[]>('./assets/dados_para_app/diagnostico.json');
  }
}