import { Component, OnInit } from '@angular/core';
import { Popover } from 'bootstrap';
import { ScrollServiceService } from 'src/app/services/scroll-service.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private scrollService: ScrollServiceService) {}

  ngOnInit() {
    this.scrollService.scrollEvent.subscribe((sectionId: string) => {
      this.scrollToSection(sectionId);
    });

  }

  scrollToSection(sectionId: string) {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }



}
