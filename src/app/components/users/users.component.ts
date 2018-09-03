import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users: User[];
showExtended: boolean = true;
loaded: boolean = false;
enabledAdd: boolean = true;

  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.users = [
        {
          firstName: 'Je',
          lastName: 'Dirais',
          age: 100,
          address: {
          street: 'sesame',
          city: 'frisco',
          state: 'TX'
        }, image: 'http://lorempixel.com/300/300/animals/3/',
        isActive: false,
        registered: new Date('01/01/1901 01:07:01' )
        },
        {
          firstName: 'K',
          lastName: 'D',
          age: 130,
          address: {
          street: 'mill',
          city: 'Plano',
          state: 'TX'
        },  image: 'http://lorempixel.com/300/300/people/3',
        isActive: true,
        registered: new Date('01/01/1901 01:07:01' )
        },
        {
          firstName: 'L',
          lastName: 'M',
          age: 200,
          address: {
          street: 'peach',
          city: 'frisco',
          state: 'TX'
        },  image: 'http://lorempixel.com/300/300/people/19',
        isActive: true,
        registered: new Date('01/01/1901 01:07:01' )
        },
        {
          firstName: 'N',
          lastName: 'O',
          age: 99,
          address: {
          street: 'tree',
          city: 'frisco',
          state: 'TX'
        },  image: 'http://lorempixel.com/600/600/people/9',
        isActive: true,
        registered: new Date('01/01/1901 01:07:01' )
        }
      ];
      this.loaded = true;
    }, 2000);
  }
}
