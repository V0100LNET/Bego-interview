import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  @Output() resetInput: EventEmitter<boolean> = new EventEmitter<boolean>();

  emitEvent(): void {
    this.resetInput.emit(true);
  }
  
  constructor() { }
}
