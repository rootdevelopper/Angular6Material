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
currentClasses: {};
currentStyles: {};

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
        balance: 100,
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
        balance: 100,
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
        balance: 100,
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
        balance: 100,
        registered: new Date('01/01/1901 01:07:01' )
        }
      ];
      this.loaded = true;
      this.setCurrentClasses();
      this.setCurrentStyles();
    }, 2000);
   

    // this.addUsers({
    //   firstName: 'P',
    //   lastName: 'Q',
    //   age: 199,
    //   address: {
    //   street: 'square',
    //   city: 'frisco',
    //   state: 'TX'
    //   },  image: 'http://lorempixel.com/600/600/people/6',
    //   isActive: true
    // });
  }
  // addUsers(user: User){
  //   this.users.push(user);
  // }

  setCurrentClasses(){
    this.currentClasses = {
      'success': this.enabledAdd
    }
  }

  setCurrentStyles(){
    this.currentStyles = {
      'padding-top': this.showExtended ? '0': '40px',
      'font-size': this.showExtended ? '': '40px'
    }
  }
}
