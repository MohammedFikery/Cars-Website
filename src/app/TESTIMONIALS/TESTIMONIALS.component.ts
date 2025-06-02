import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-TESTIMONIALS',
  templateUrl: './TESTIMONIALS.component.html',
  styleUrls: ['./TESTIMONIALS.component.css']
})
export class TESTIMONIALSComponent  {
customOptions = {
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  dots: false,
  nav: false,
  responsive: {

    1000: {
      items: 1
    }
  }
};

}
