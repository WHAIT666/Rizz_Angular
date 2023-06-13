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
  hotelImage: any = [];
  hotelId: string = '';
  hotelName: string = '';
  reviews: any[] = [];

  constructor(
    private hotelApiService: hotelApiService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.hotelId = params['id'];
    });
    // Fetch all the details
    this.hotelApiService.fetchHotelDetails(this.hotelId).subscribe((res: any) => {
      this.hotelDetails = res;
      this.hotelName = res.name; // Assign the hotel's name to the hotelName variable
    });

    // Fetch hotel images
    this.hotelApiService.fetchHotelPhotos(this.hotelId).subscribe((res: any) => {
      this.hotelImage = res[0].url_1440;
    });

    // Fetch rating and reviews
    this.hotelApiService.fetchOtherData(this.hotelId).subscribe((res: any) => {
      this.hotelOtherDetails = res;
      this.reviews = res.reviews; // Assign the fetched reviews to the reviews property
    });
  }

  getRatingText(score: number): string {
    if (score >= 9) {
      return 'Excelente';
    } else if (score >= 8) {
      return 'Muito Bom';
    } else if (score >= 7) {
      return 'Bom';
    } else {
      return 'Razoável';
    }
  }

  isEmpty(obj: any) {
    return Object.keys(obj).length === 0;
  }

  roundPrice(val: any) {
    return Math.floor(val);
  }
}
