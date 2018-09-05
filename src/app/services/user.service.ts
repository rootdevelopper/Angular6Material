import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {of } from 'rxjs/Observable/of';

import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {
users: User[];
data: Observable<any>;

  constructor() { 
    this.users = [
      {
        firstName: 'Je',
        lastName: 'Dirais',
        email: 'rrte@matMenuAnimations.com',
        image: 'http://lorempixel.com/300/300/animals/3/',
        isActive: false,
        registered: new Date('01/01/1901 01:07:01'),
        hide: true
      },
      {
        firstName: 'K',
        lastName: 'D',
        email: 'rrte@matMenuAnimations.com', image: 'http://lorempixel.com/300/300/people/3',
        isActive: true,
        registered: new Date('01/01/1901 01:07:01'),
        hide: true
      },
      {
        firstName: 'L',
        lastName: 'M',

        email: 'rrte@matMenuAnimations.com', image: 'http://lorempixel.com/300/300/people/19',
        isActive: true,
        registered: new Date('01/01/1901 01:07:01'),
        hide: true
      },
      {
        firstName: 'N',
        lastName: 'O',
        email: 'rrte@matMenuAnimations.com', image: 'http://lorempixel.com/600/600/people/9',
        isActive: true,
        registered: new Date('01/01/1901 01:07:01'),
        hide: false
      }
    ];
  }


  getData(){
    this.data = new Observable(observer => {
      setTimeout(()=> {
        observer.next(1);
      }, 1000 );

      setTimeout(()=> {
        observer.next(2);
      }, 2000 );

      setTimeout(()=> {
        observer.next(3);
      }, 3000 );

      setTimeout(()=> {
        observer.next(4);
      }, 4000 );
    });
    return this.data;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User){
    this.users.unshift(user);
  }
}
