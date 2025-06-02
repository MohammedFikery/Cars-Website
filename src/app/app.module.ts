import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BecomeARenterComponent } from './become-arenter/become-arenter.component';
import { RentalDealsComponent } from './rental-deals/rental-deals.component';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AllCarsComponent } from './allCars/allCars.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TESTIMONIALSComponent } from './TESTIMONIALS/TESTIMONIALS.component';
import { FotterComponent } from './Fotter/Fotter.component';
import { FormsModule } from '@angular/forms';
import { CarDetailesComponent } from './carDetailes/carDetailes.component';

@NgModule({
  declarations: [				
    AppComponent,
    NavComponent,
    BecomeARenterComponent,
    RentalDealsComponent,
    HowItWorkComponent,
    WhyChooseUsComponent,
    NotFoundComponent,
      AllCarsComponent,
      TESTIMONIALSComponent,
      FotterComponent,
      CarDetailesComponent
   ],
  imports: [
    BrowserModule,
     AppRoutingModule,
     HttpClientModule,
     CarouselModule,FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
