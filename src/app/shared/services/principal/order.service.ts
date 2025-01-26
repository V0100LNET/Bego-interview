import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UpcomingOrders, Result, OrderDetail } from '../../interfaces/principal/orders.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private urlUpcomingOrders: string = "https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io/orders/upcoming";
  private urlOrderDetail: string = "https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io/orders";

  constructor(
    private httpClient: HttpClient
  ) { }

  getUpcomingOrders(): Observable<UpcomingOrders> {
    return this.httpClient.get<UpcomingOrders>(this.urlUpcomingOrders).pipe(
      map(upcomingOrders => {
        upcomingOrders.result[3].status = 2;
        upcomingOrders.result[3].order_number = "PH0AULMU";
        upcomingOrders.result[3].destinations[0].address = "Blvd. Oswaldo Ávila Camacho 5675, Valle Naranja, 678678 Tlalnepantla de Baz, Méx., Mexico";
        upcomingOrders.result[3].destinations[1].address = "Intendencia Solidaridad 9877, Juchitán, 89766 Matías Romero, Méx., Mexico";
        upcomingOrders.result[3].start_date = 1738108800000;

        return upcomingOrders;
      })
    );
  }

  getDataOrderDetail(): Observable<OrderDetail> {
    return this.httpClient.get<OrderDetail>(this.urlOrderDetail);
  }
}
