import { Component, OnInit } from '@angular/core';
import { hotelApiService } from './hotel-card.service';
import { BookingapiService } from '../bookingapi/bookingapi.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.css']
})
export class HotelCardComponent implements OnInit {
  hotelDetails: any = '';
  hotelOtherDetails: any = '';
  hotelImage: any = []
  hotelId: string = '';
  hotelName: string = '';

  constructor(
    private hotelApiService: hotelApiService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.hotelId = params['id'];
    });
    //todos os detalhes
    this.hotelApiService.fetchHotelDetails(this.hotelId).subscribe((res: any) => {
      this.hotelDetails = res;
      this.hotelName = res.name; // Assign the hotel's name to the hotelName variable
    });
  
  

    //Imagens do hotel
    this.hotelApiService.fetchHotelPhotos(this.hotelId).subscribe((res: any) => {
      this.hotelImage = res[0].url_1440
    });

    //RATING E REVIEWS
    this.hotelApiService.fetchOtherData(this.hotelId).subscribe((res: any) => {
      this.hotelOtherDetails = res;
    });
  }

  

  isEmpty(obj: any) {
    return Object.keys(obj).length === 0;
  }

  roundPrice(val: any) {
    return Math.floor(val)
  }
}