import { CarDetailesComponent } from './carDetailes/carDetailes.component';
import { TESTIMONIALSComponent } from './TESTIMONIALS/TESTIMONIALS.component';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BecomeARenterComponent } from './become-arenter/become-arenter.component';
import { RentalDealsComponent } from './rental-deals/rental-deals.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AllCarsComponent } from './allCars/allCars.component';

const routes: Routes = [
  { path: '', redirectTo: 'BecomeARenter', pathMatch: 'full', title: '' },
  { path: 'BecomeARenter', component: BecomeARenterComponent, title: 'Become a renter'},
  { path: 'RentalDeals', component: RentalDealsComponent, title: 'Rental deals' },
  { path: 'HowItWork', component: HowItWorkComponent, title: 'How it work' },
  { path: 'WhyChooseUs', component: WhyChooseUsComponent, title: 'Why choose us' },
  { path: 'allCars', component: AllCarsComponent, title: 'All Cars' },
  { path: 'carDetails/:id', component: CarDetailesComponent, title: 'carDetails' },
  { path: '**', component: NotFoundComponent, title: 'Page Not Found' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
