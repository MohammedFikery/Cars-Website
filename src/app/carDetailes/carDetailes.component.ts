import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApisService } from '../Services/Apis.service';
import { Icars } from '../interfaces/Icars';

@Component({
  selector: 'app-carDetailes',
  templateUrl: './carDetailes.component.html',
  styleUrls: ['./carDetailes.component.css']
})
export class CarDetailesComponent implements OnInit {
carID:number=0;
  carDetails: any = {};

  
  constructor(private _ActivatedRoute:ActivatedRoute,private _ApisService:ApisService) { }

  ngOnInit() {
        this.carID=this._ActivatedRoute.snapshot.params['id'];
         this._ApisService.GetCarById(this.carID).subscribe({
      next:(res: any) => {
        this.carDetails=res.Car;
        console.log("carDetails",res.Car);
      },
      error: (err: any) => {
        console.log(err);
      },

      complete: () => {
        console.log('all IS done');
      },
    });

  }

}
