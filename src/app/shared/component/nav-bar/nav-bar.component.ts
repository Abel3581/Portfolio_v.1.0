import { Component, ElementRef, Renderer2 } from '@angular/core';
import { ScrollServiceService } from 'src/app/services/scroll-service.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private scrollService: ScrollServiceService) {}

  scrollTo(sectionId: string) {
    this.scrollService.scrollToSection(sectionId);
  }


}
