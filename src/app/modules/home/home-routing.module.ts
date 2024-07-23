import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreMiComponent } from '../components/sobre-mi/sobre-mi.component';


const routes: Routes = [
  {
   path:'',
    children:[
      {path:'', component:HomeComponent}

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
