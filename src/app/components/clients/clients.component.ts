import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/Client';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Client[];
  totalOwed: number;

  dataColumns: string[] = ['firstName', 'lastName', 'email', 'balance', 'details'];
  dataRows: any;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getClients().subscribe(
      clients => {
        this.clients = clients;
        this.dataRows = clients;
        this.getTotalOwed();
      });

  }
  getTotalOwed() {
    this.totalOwed = this.clients.reduce((sumTotal, client) => {
      return sumTotal + parseFloat(client.balance.toString());
    }, 0);
  }

}
