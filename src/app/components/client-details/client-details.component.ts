import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Client } from '../../models/Client';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  id: string;
  client: Client;
  hasBAlance = false;
  showBAlanceUpadteInfo = false;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.clientService.getClient(this.id).subscribe(client => {
      this.client = client;
      if (client != null) {
        if (client.balance > 0) {
          this.hasBAlance = true;
        }
      }
    });
  }

  updateBalance() {
    this.clientService.updateClient(this.client);
    this.flashMessage.show('Balance updated', {
      cssClass: 'good', timeout: 4000
    });
  }

  onDeleteClick() {
    if (confirm('Really? ')) {
      this.clientService.deleteClient(this.client);
    }
    this.flashMessage.show('Client removed', {
      cssClass: 'good', timeout: 4000
    });
    this.router.navigate(['/']);
  }
}
