import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Guest } from '../models/guest.model';
import { GuestsService } from '../services/guests.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {



  deluxe: Guest = {
id: '',
fullName: '',
email: '',
checkIn: '',
checkOut: '',
price: 50000,
room: 'Deluxe Room',
  };


  studio: Guest = {
id: '',
fullName: '',
email: '',
checkIn: '',
checkOut: '',
price: 70000,
room: 'Studio Broadway',
  };

  standard: Guest = {
id: '',
fullName: '',
email: '',
checkIn: '',
checkOut: '',
price: 140000,
room: 'Standard Double',
  };

  arsenal: Guest = {
id: '',
fullName: '',
email: '',
checkIn: '',
checkOut: '',
price: 56000,
room: 'Arsenal',
  };

  manchester: Guest = {
id: '',
fullName: '',
email: '',
checkIn: '',
checkOut: '',
price: 75000,
room: 'Manchester',
  };

exclusive: Guest = {
id: '',
fullName: '',
email: '',
checkIn: '',
checkOut: '',
price: 140000,
room: 'Exclusive',
  };
  
  constructor(private guestService: GuestsService, private router: Router) { }

  ngOnInit(): void {
  }


  addGuest(){
this.guestService.addGuest(this.deluxe)
 .subscribe({
  next: (guest) => {
this.router.navigate(['profile'])
  }
 });
}

studioGuest(){
this.guestService.addGuest(this.studio)
 .subscribe({
  next: (guest) => {
this.router.navigate(['profile'])
  }
 });

}

standardGuest(){
this.guestService.addGuest(this.standard)
 .subscribe({
  next: (guest) => {
this.router.navigate(['profile'])
  }
 });
}

manchesterGuest(){
this.guestService.addGuest(this.manchester)
 .subscribe({
  next: (guest) => {
this.router.navigate(['profile'])
  }
 });
}

arsenalGuest(){
this.guestService.addGuest(this.arsenal)
 .subscribe({
  next: (guest) => {
this.router.navigate(['profile'])
  }
 });
}

exclusiveGuest(){
this.guestService.addGuest(this.exclusive)
 .subscribe({
  next: (guest) => {
this.router.navigate(['profile'])
  }
 });
}
 }
