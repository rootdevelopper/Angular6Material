import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User =   {
    firstName: '',
    lastName: '',
    age: 0,
    address: {
    street: '',
    city: '',
    state: ''
  }, image: '',
  isActive: false,
  registered: new Date('01/01/1901 01:07:01' ),
  hide: true
  }
users: User[];
showExtended: boolean = true;
loaded: boolean = false;
enabledAdd: boolean = false;
hidden: string='more';
showUserForm: boolean= false;

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
        registered: new Date('01/01/1901 01:07:01' ),
        hide: true
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
        registered: new Date('01/01/1901 01:07:01' ),
        hide: true
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
        registered: new Date('01/01/1901 01:07:01' ),
        hide: true
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
        registered: new Date('01/01/1901 01:07:01' ),
        hide: false
        }
      ];
      this.loaded = true;
    }, 2000);
  }
  
  addUser(){
   this.user.isActive = true;
   this.user.registered = new Date();
    this.users.unshift(this.user);
    this.user = {
      firstName: '',
      lastName: '',
      age: 0,
      address: {
      street: '',
      city: '',
      state: ''
    }, image: '',
    isActive: false,
    registered: new Date('01/01/1901 01:07:01' ),
    hide: true
    }
  }

  onSubmitonSubmit(e){

    e.preventDefault();
  }

  toggleView(user: User){
    user.hide = !user.hide;
    if(this.hidden === 'more'){
      this.hidden = 'less'
    }else {
      this.hidden = 'more'
    }
  }
}
