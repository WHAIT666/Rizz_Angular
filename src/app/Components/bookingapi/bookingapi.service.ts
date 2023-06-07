import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookingapiService {
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': '781692ae4amshec7cb198aac9570p11ffebjsn0b929b1ffaac',
    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
  });

  constructor(private http: HttpClient) {}

    // Buscar hotéis baseado nos parametros
  fetchHotels(
    destId: number,
    checkinDate: string,
    checkoutDate: string,
    adultsNumber: number,
    roomNumber: number,
    
  ) {
    let params = new HttpParams({
      fromObject: {
        checkin_date: checkinDate,
        dest_type: 'region',
        units: 'metric',
        checkout_date: checkoutDate,
        adults_number: adultsNumber,
        order_by: 'popularity',
        dest_id: destId,
        filter_by_currency: 'EUR',
        locale: 'pt-pt',
        room_number: roomNumber,
      },
    });

     // Fazer o GET request para ir buscar os hotéis
    return this.http.get(
      'https://booking-com.p.rapidapi.com/v1/static/hotels',
      { params: params, headers: this.headers }
    );
  }
  
  fetchHotelDetails(hotel_id: string) {
    return this.http.get(
      `https://booking-com.p.rapidapi.com/v1/hotels/data?hotel_id=${hotel_id}&locale=en-pl`,
      { headers: this.headers }
    );
  }
}
