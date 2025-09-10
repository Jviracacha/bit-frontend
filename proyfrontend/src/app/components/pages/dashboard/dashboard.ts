import { Component, inject, OnInit } from '@angular/core';
import { Clients } from '../../../services/clients';



@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  private ClientesServices = inject (Clients)
// usamos ! para que se le asigne un valor de manera obligatoria cuando se inicie el componente
  Clients! : any []

  ngOnInit ():void{
    this.ClientesServices.getAllClients().subscribe((res: any)=>{
      this.Clients = res.data;
      console.log('clients:',this.Clients);
    });
  }
}
