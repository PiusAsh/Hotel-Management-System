import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private guestService: GuestsService, private router: Router) { 

  }

  ngOnInit(): void {
this.route.paramMap.subscribe({
  next: (params) => {
   const id = params.get('id');

   if(id) {
//call api
this.guestService.getGuest(id)
.subscribe({
  next: (response) => {console.log('******CHECKING', response);

this.guestDetails = response;
  }
});
   }
  }
})
  }

  updateGuest() {
    this.guestService.updateGuest(this.guestDetails.id, this.guestDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['dashboard'])
      }
    });
  }

  deleteGuest(id: string){
    this.guestService.deleteGuest(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['dashboard'])
      }
    });
  }
}
