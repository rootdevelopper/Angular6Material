import { Injectable } from '@angular/core';
import { Log } from '../models/log';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  logs: Log[];

  private logSource = new BehaviorSubject<Log>({
    id: null, text: null, date: null
  });

  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable();

  selectedLog = this.logSource.asObservable();

  constructor() {
    // this.logs = [
    //   { id: '1', text: 'Generetared log', date: new Date('01/01/2001') },
    //   { id: '2', text: 'Generetared lag', date: new Date('01/02/2001') },
    //   { id: '3', text: 'Generetared lop', date: new Date('01/03/2001') }
    // ];
    this.logs = [];
  }

  getLogs(): Observable<Log[]> {

    if (localStorage.getItem('logs') === null) {
      this.logs = [];
    } else {
      this.logs = JSON.parse(localStorage.getItem('logs'));
    }

    return of(this.logs.sort((a, b) => {
      return b.date = a.date;
    }) );
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }

  addLog(log: Log) {
    this.logs.unshift(log);
    localStorage.setItem('logs', JSON.stringify(this.logs));
  }

  updateLog(log: Log) {
    this.deleteLog(log);
    this.logs.unshift(log);
    localStorage.setItem('logs', JSON.stringify(this.logs));

  }

  deleteLog(log: Log) {
    this.logs.forEach((existingLog, index) => {
      if (log.id === existingLog.id) {
        this.logs.splice(index, 1);
      }
    });
    localStorage.setItem('logs', JSON.stringify(this.logs));
  }

  clearState() {
    this.stateSource.next(true);
  }
}
