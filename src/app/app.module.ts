import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HotelCardComponent } from './Components/hotel-card/hotel-card.component';
import { HotelListComponent } from './Components/hotel-list/hotel-list.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ViewPageComponent } from './Components/view-page/view-page.component';
import { BookingapiComponent } from './Components/bookingapi/bookingapi.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HotelCardComponent,
    HotelListComponent,
    LandingPageComponent,
    NavbarComponent,
    ViewPageComponent,
    BookingapiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
