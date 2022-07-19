import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Guest } from '../models/guest.model';

@Injectable({
  providedIn: 'root'
})
export class GuestsService {
baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllGuests(): Observable<Guest[]> {
   return this.http.get<Guest[]>(this.baseApiUrl + '/api/guests');
  }

  addGuest(addGuestRequest: Guest): Observable<Guest>{
    addGuestRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Guest>(this.baseApiUrl + '/api/guests', addGuestRequest);
  }

  studioGuest(addGuestRequest: Guest): Observable<Guest>{
    addGuestRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Guest>(this.baseApiUrl + '/api/guests', addGuestRequest);
  }
  standardGuest(addGuestRequest: Guest): Observable<Guest>{
    addGuestRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Guest>(this.baseApiUrl + '/api/guests', addGuestRequest);
  }
  arsenalGuest(addGuestRequest: Guest): Observable<Guest>{
    addGuestRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Guest>(this.baseApiUrl + '/api/guests', addGuestRequest);
  }
  exclusiveGuest(addGuestRequest: Guest): Observable<Guest>{
    addGuestRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Guest>(this.baseApiUrl + '/api/guests', addGuestRequest);
  }
  manchesterGuest(addGuestRequest: Guest): Observable<Guest>{
    addGuestRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Guest>(this.baseApiUrl + '/api/guests', addGuestRequest);
  }

  getGuest(id: string): Observable<Guest>{
   return this.http.get<Guest>(this.baseApiUrl + '/api/guests/' + id);
  }

}
