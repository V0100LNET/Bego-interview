import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GeneralService } from '../../services/general.service';
import { ActiveDataPage, Dropoff, OrderDetail, Result, ResultAllOrder } from '../../interfaces/principal/orders.interface';
import { OrderService } from '../../services/principal/order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  date: Date = new Date();
  listStatusItem: Dropoff[] = [];
  listOrderDetail!: OrderDetail;

  constructor(
    private generalService: GeneralService,
    private orderService: OrderService
  ){}

  ngOnInit(): void {
    this.getDataOrderDetail();
    this.generalService.activeDataPage.subscribe(response => {
      this.initDataDetail(response);
    })
  }

  get getOrderDetailAnother(): ResultAllOrder {
    return this.generalService.getDataOrderDetail;
  }

  get getNameDriver(): string {
    return this.listOrderDetail.result.driver.nickname.split(" ")[0] ?? "- - -";
  }

  get disabledTrackingBtn(): boolean {
    if(this.getOrderDetail().status >= 3){
      return false
    }

    return true;
  }

  getOrderDetail(): Result {
    return this.generalService.getDataOrder;
  }

  getDataOrderDetail(): void {
    this.orderService.getDataOrderDetail().subscribe((respose: OrderDetail) => {
      switch(respose.status){
        case 200:
          this.listOrderDetail = respose;
          this.listStatusItem = respose.result.status_list.pickup;          
        break;
      }      
    })
  }
  
  getOpacityText(status: boolean): string {
    if(!status) {
      return "disabled";
    }

    return "";
  }

  getOpacity(status: boolean, index: number): string {
    if(!status || this.listStatusItem[index + 1].active == false) return "disabled-line-step";
    
    return "";
  }

  getTextEnglish(text: string): string {
    switch(text){
      case "Orden creada": return "Created Order";
      case "Orden asignada": return "Accepted Order";
      case "Recolección iniciada": return `Pickup set up by ${this.getNameDriver}`;
      case "Recolección completada": return "Pickup Completed";
      case "Entrega iniciada": return "Delivery Started";
      case "Entrega completada": return "Delivery Completed";
      case "Orden completada": return "Order Completed";
      default: return "No status";
    }
  }

  initDataDetail(data: ActiveDataPage): void {
    if(data.pickupDropoff == "pickup") {
      this.listStatusItem = this.listOrderDetail.result.status_list.pickup;
      console.log(this.listStatusItem);
      
    }

    if(data.pickupDropoff == "dropoff") {
      this.listStatusItem = this.listOrderDetail.result.status_list.dropoff;
      console.log(this.listStatusItem);
      
    }
  }

  isActive(): boolean {
    return this.generalService.statusActive;
  }

  showElement(positionElement: number): string {
    let lastItem: number = this.listStatusItem.length;

    if(positionElement == lastItem) return "hidden";
    
    return "";
  }
}
