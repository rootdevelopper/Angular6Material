import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User
  
  constructor() {
}

  ngOnInit() {
    this.user = {
      firstName: 'J',
      lastName: 'D',
      age: 100,
      address: {
      street: 'sesame',
      city: 'frisco',
      state: 'TX'
    }
    }
  }
}
