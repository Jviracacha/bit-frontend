import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
HttpClient

@Injectable({
  providedIn: 'root'
})
export class Clients {
  /* en esta parte creamos la inyeccion de dependencias */
  private httpClient = inject (HttpClient);
  private apiUrl = 'http://localhost:4000/clientes';

  // funciones para obtener datos
  getAllClients (){
    return this.httpClient.get (this.apiUrl);
  }

}
