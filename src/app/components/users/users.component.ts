import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';
import { matMenuAnimations } from '@angular/material';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    image: '',
    isActive: false,
    registered: new Date('01/01/1901 01:07:01'),
    hide: true
  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enabledAdd: boolean = false;
  hidden: string = 'more';
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;
  data: any;

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getData().subscribe(data => {
      console.log(data);
    });

    setTimeout(() => {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });
    }, 2000);
  }

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);
    this.user = {
      firstName: '',
      lastName: '',

      email: 'rrte@matMenuAnimations.com',
      image: '',
      isActive: false,
      registered: new Date('01/01/1901 01:07:01'),
      hide: true
    }
  }

  onSubmit({value, valid}: {value: User, valid: boolean}) {
     if(!valid){
      console.log('Form bad');
     } else {
       console.log('ok ');
       value.isActive = true;
       value.registered = true;
       value.hide = true;
       //this.users.unshift(value);
      this.userService.addUser(value);
       this.form.reset();
     }
    }

  toggleView(user: User) {
    user.hide = !user.hide;
    if (this.hidden === 'more') {
      this.hidden = 'less'
    } else {
      this.hidden = 'more'
    }
  }
}
