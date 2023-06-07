import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { FooterComponent } from './Components/footer/footer.component';
import { BookingapiComponent } from './Components/bookingapi/bookingapi.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HotelListComponent } from './Components/hotel-list/hotel-list.component';
import { HotelCardComponent } from './Components/hotel-card/hotel-card.component';

const routes: Routes = [

  {path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  {path: 'landing-page', component: LandingPageComponent },
  {path: 'navbar', component: NavbarComponent },
  {path: 'hotel-list', component: HotelListComponent },
  {path: 'hotel-card/:id', component: HotelCardComponent },
  {path: 'footer', component: FooterComponent },
  {path: 'bookingapi', component: BookingapiComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
