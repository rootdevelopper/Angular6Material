import { Component, OnInit, ViewChild } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';
import { Client } from '../../models/Client';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0
  };

  disabledBalanceOnAdd: boolean;

  @ViewChild('clientForm') form: any;

  constructor(
    private flashMessage: FlashMessagesService,
    private clientService: ClientService,
    private router: Router,
    private settingService: SettingsService
  ) { }

  ngOnInit() {
    this.disabledBalanceOnAdd = this.settingService.getSettings()
    .disableBalanceOnAdd;
  }

  onSubmit({ value, valid }: { value: Client, valid: boolean }) {
    if (!valid) {
      this.flashMessage.show('the form is not complete', {
        cssClass: 'bad',
        timeout: 3000
      });
    }
    this.flashMessage.show('got it', {
      cssClass: 'good',
      timeout: 3000
    });

    this.clientService.newClient(value);
    this.router.navigate(['/']);
  }

}
