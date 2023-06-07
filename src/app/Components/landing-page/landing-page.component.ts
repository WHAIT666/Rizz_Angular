import { Component, OnInit } from '@angular/core';
import { LandingPageService } from './landing-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  myData: any;
  hotels: any[] = [];
  destinations: any[] = [];
  destination: string = '';
  checkinDate!: string;
  checkoutDate!: string;
  adultsNumber!: number;
  roomNumber!: number;
  showBookingPage: boolean = false;

  constructor(
    private LandingPageService: LandingPageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Ir Buscar destinos de LandingPageService
    this.LandingPageService.fetchDestinations().subscribe((response: any) => {
      this.destinations = response.result
    });
  }

  onSearch(): void {
    // Filtrar os hotéis baseado no destino
    const filteredHotels = this.hotels.filter(
      (hotel) => hotel.city === this.destination
    );

    this.LandingPageService.fetchHotels(this.destination).subscribe((response: any) => {
      console.log(response.result)
      let auxList: any = response;
      this.hotels = auxList.result;
      // Construir parametros da qauery
      const queryParams = {
        destination: this.destination,
        checkinDate: this.checkinDate,
        checkoutDate: this.checkoutDate,
        adultsNumber: this.adultsNumber,
        hotels: JSON.stringify(this.hotels),
      };

      // Ir para o booking api com os parametros ( era suposto ser para o hotel-list mas como ja tinhamos feito aqui deixamos assim)
      this.router.navigate(['/bookingapi'], { queryParams: queryParams });
    });
  }
}
