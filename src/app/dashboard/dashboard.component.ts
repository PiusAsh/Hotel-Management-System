import { Component, OnInit } from '@angular/core';
import { Guest } from '../models/guest.model';
import { GuestsService } from '../services/guests.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  guests: Guest[] = [
  //   {
  //     "id": 232,
  // "fullName": "Joshua Doe",
  // "email": "Joed@gmail.com",
  // "room": "Studio Broadway room",
  // "checkIn": "Today",
  // "checkOut": "Tomorrow",
  // "price": 75000
  //   }
  ];

  constructor(private guestsService: GuestsService) { }

  ngOnInit(): void {
this.guestsService.getAllGuests()
.subscribe({
  next: (guests) => {
    this.guests = guests;
  },
   error: (response) =>
   console.log(response)
})
}





}
