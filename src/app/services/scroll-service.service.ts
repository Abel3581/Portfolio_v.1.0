import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollServiceService {
  scrollEvent = new EventEmitter<string>();
  constructor() { }

  scrollToSection(sectionId: string): void {
    this.scrollEvent.emit(sectionId);
  }
}
