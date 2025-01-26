import { EventEmitter, Injectable, Output } from '@angular/core';
import { ActiveDataPage, Result, ResultAllOrder } from '../interfaces/principal/orders.interface';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  @Output() resetInput: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() activeDataPage: EventEmitter<ActiveDataPage> = new EventEmitter<ActiveDataPage>();
  
  private dataOrder!: Result;
  private dataOrderDetail!: ResultAllOrder
  private isActivePageDetail: boolean = false;

  get getDataOrder(): Result {
    return this.dataOrder;
  }

  get getDataOrderDetail(): ResultAllOrder {
    return this.dataOrderDetail;
  }

  get statusActive(): boolean {
    return this.isActivePageDetail;
  }

  emitEvent(): void {
    this.resetInput.emit(true);
  }

  setStatusActive(status: boolean): void {
    this.isActivePageDetail = status;
  }

  setDataOrder(data: Result): void {
    this.dataOrder = data;
  }

  setDataOrderDetail(data: ResultAllOrder): void {
    this.dataOrderDetail = data;
  }

  setActivateDataPage(active: ActiveDataPage): void {
    this.activeDataPage.emit(active);
  }
}
