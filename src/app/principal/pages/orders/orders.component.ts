import { UpcomingOrders, Result } from 'src/app/shared/interfaces/principal/orders.interface';
import { OrderService } from 'src/app/shared/services/principal/order.service';
import { GeneralService } from 'src/app/shared/services/general.service';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  incommingOrdersSummary: Result[] = [];
  filteredData: Result[] = [];
  noData: boolean = false;
  indexTab: number = 0;

  constructor(
    private orderService: OrderService,
    private generalService: GeneralService
  ) {}

  ngOnInit(): void {
    this.getIncomingOrders();
  }

  get getOrdersUpcoming(): Result[] {    
    return this.filteredData.filter(data => data.status == 1 || data.status == 2);
  }

  get getOrdersComplete(): Result[] {    
    return this.filteredData.filter(data => data.status == 3);
  }

  get getOrdersPast(): Result[] {    
    return this.filteredData.filter(data => data.status == 0);
  }

  get showMessageNoData(): boolean {    
    return this.filteredData.length == 0 ? true : false;
  }

  get isActive(): boolean {
    return this.generalService.statusActive;
  }

  get getLabel(): string {
    if(this.generalService.statusActive) {
      return "Details";
    }

    return "Orders";
  }

  getIncomingOrders(): void {
    this.orderService.getUpcomingOrders().subscribe((response: UpcomingOrders) => {
      switch(response.status) {
        case 200:
          this.noData = false;
          this.incommingOrdersSummary = response.result;
          this.filteredData = this.incommingOrdersSummary;          
        break;

        default: 
          this.noData = true;
        break;
      }      
    })
  }

  selectTab(event: MatTabChangeEvent) {    
    this.filteredData = this.incommingOrdersSummary;          
    this.indexTab = event.index;
    this.generalService.emitEvent();
  }

  eventKeyUp(text: string): void {
    if(!text) {
      this.filteredData = this.incommingOrdersSummary;          
      return;
    };
    
    this.filteredData = this.incommingOrdersSummary.filter(data => data.order_number.includes(text.toUpperCase()));    
  }

  back(): void {
    if(this.generalService.statusActive) {
      this.generalService.setStatusActive(false);
    }

    this.filteredData = this.incommingOrdersSummary;          
  }
}
