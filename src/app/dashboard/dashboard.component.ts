import { Component, OnInit } from '@angular/core';
import { Guest } from '../models/guest.model';
import { GuestsService } from '../services/guests.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  guests: Guest[] = [];

  

  constructor(private guestsService: GuestsService) {}


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

logout(){
  alert('You are about to Logout. Click OK to Proceed')
}
}
