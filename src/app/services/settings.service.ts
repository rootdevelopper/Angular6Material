import { Injectable } from '@angular/core';
import { Settings } from '../models/Settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  setting: Settings = {
    allowRegistration: true,
    disableBalanceOnAdd: false,
    disableBalanceOnEdit: false,
  };

  constructor() {

    if (localStorage.getItem('settings') != null) {
      this.setting = JSON.parse(localStorage.getItem('settings'));
    }
  }

  getSettings(): Settings {
    return this.setting;
  }


  changeSettings(settings: Settings) {
    localStorage.setItem('settings', JSON.stringify(settings));
  }

}
