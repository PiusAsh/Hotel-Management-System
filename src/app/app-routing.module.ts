import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditGuestComponent } from './edit-guest/edit-guest.component';
import { GuestProfileComponent } from './guest-profile/guest-profile.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{
  path: '',
  component: HomeComponent
},
{
  path: 'dashboard',
  component: DashboardComponent
},
// {
//   path: 'edit',
//   component: EditGuestComponent
// },
{
  path: 'guest/edit/:id',
  component: EditGuestComponent
},
{
  path: 'profile',
  component: GuestProfileComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
