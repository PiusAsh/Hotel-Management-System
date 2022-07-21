import { Component, OnInit } from '@angular/core';
import { User } from '../models/guest.model';
import { GuestsService } from '../services/guests.service';


@Component({
  selector: 'app-guest-profile',
  templateUrl: './guest-profile.component.html',
  styleUrls: ['./guest-profile.component.css']
})
export class GuestProfileComponent implements OnInit {


users: User[] = [
    {

  fullName: 'Joshua Doe',
  email: 'Joed@gmail.com',
  phone: '09052457787',
  address: 'street',
  country: 'Nigeria',
    }
  ];



  constructor() { }

  ngOnInit(): void {
// this.guestService.getAllUser();
// .subscribe({
//   next: (this.users) => {
//     console.log(this.users)
//   }
// })
  }

}
