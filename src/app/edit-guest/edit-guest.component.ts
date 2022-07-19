import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Guest } from '../models/guest.model';
import { GuestsService } from '../services/guests.service';

@Component({
  selector: 'app-edit-guest',
  templateUrl: './edit-guest.component.html',
  styleUrls: ['./edit-guest.component.css']
})
export class EditGuestComponent implements OnInit {

  guestDetails: Guest = {

    id: 0,
  fullName: '',
  email: '',
  room: '',
  checkIn: '',
  checkOut: '',
  price: 0,
  };

  constructor(private route: ActivatedRoute, private guestService: GuestsService) { 

  }

  ngOnInit(): void {
this.route.paramMap.subscribe({
  next: (params) => {
   const id = params.get('id');

   if(id) {
//call api
this.guestService.getGuest(id)
.subscribe({
  next: (response) => {
this.guestDetails = response;
  }
});
   }
  }
})
  }

}
