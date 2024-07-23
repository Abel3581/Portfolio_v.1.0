import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from 'src/app/shared/component/nav-bar/nav-bar.component';
import { FooterComponent } from 'src/app/shared/component/footer/footer.component';
import { MdbRippleModule} from 'mdb-angular-ui-kit/ripple';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { ProyectsComponent } from '../components/proyects/proyects.component';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { SobreMiComponent } from '../components/sobre-mi/sobre-mi.component';
import { EducationComponent } from '../components/education/education.component';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { ContactComponent } from '../components/contact/contact.component';
import { CertificationComponent } from '../components/certification/certification.component';









@NgModule({
  declarations: [
    HomeComponent,
    ProyectsComponent,
    NavBarComponent,
    FooterComponent,
    SobreMiComponent,
    EducationComponent,
    ContactComponent,
    CertificationComponent





  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MdbRippleModule,
    MdbCollapseModule,
    MdbCarouselModule,
    MdbPopoverModule,
    MdbAccordionModule,
    MdbModalModule,





  ],
  exports:[

  ]
})
export class HomeModule { }
