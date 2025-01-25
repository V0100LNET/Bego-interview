import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { Result } from '../../interfaces/principal/orders.interface';
import { interval, map, takeWhile } from 'rxjs';

@Component({
  selector: 'app-card-orders',
  templateUrl: './card-orders.component.html',
  styleUrls: ['./card-orders.component.css']
})
export class CardOrdersComponent implements OnInit {
  @Input() orderData!: Result;

  startDate: Date = new Date();
  currentDate: Date = new Date();
  remainingTime: string = "";
  enableNavigation: boolean = false;

  ngOnInit(): void {
    this.initIntervalDate();
  }

  get intervalTime(): string {
    return this.remainingTime;
  }

  getText(status: number): string {
    switch(status) {
      case 1: return "Assigned";
      case 2: return "In transit";
      case 3: return "Complete"
      default: return "No status";
    }
  }

  getCountry(address: string): string {
    let splitText: string[] = address.split(",");
    let lastItem: number = splitText.length;
    let country: string = splitText[lastItem - 1];

    return country ?? "- - -";    
  }

  getClassByStatus(status: number): string {
    switch(status) {
      case 1: return "status-assigned";
      case 2: return "status-in-transit";
      case 3: return "status-complete";
      default: return "No status";
    }
  }

  getDate(date: number): Date {
    return new Date(date)
  }

  initIntervalDate(): void {    
    // this.startDate = new Date(this.orderData.start_date);
    this.startDate = new Date("2025-01-26");

    if (this.startDate > new Date()){
      interval(1000).pipe(
        map(() => {
          this.currentDate = new Date();
          return this.calculateRemainingTime();
        }),
        takeWhile(() => this.currentDate < this.startDate)
      ).subscribe({
        next: (remainingTime) => {
          this.remainingTime = remainingTime;
        },
        complete: () => {
          this.enableNavigation = true;
          console.log('Navegar');
        }
      })
    }
  }

  calculateRemainingTime(): string {
    const diff = this.startDate.getTime() - this.currentDate.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return `${hours}h:${minutes}m:${seconds}s`;
  }

  showButtonByStatus(status: number): boolean {
    return (status == 2) ? true : false;
  }
}
