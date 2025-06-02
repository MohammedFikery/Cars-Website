import { Icars } from '../interfaces/Icars';
import { ApisService } from './../Services/Apis.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allCars',
  templateUrl: './allCars.component.html',
  styleUrls: ['./allCars.component.css'],
})
export class AllCarsComponent implements OnInit {
  listOfCars: Icars[] = [];
  constructor(private _ApisService: ApisService) {}

  ngOnInit(): void {
    this._ApisService.GetAllCars().subscribe({
      next: (res) => {
        console.log('API response:', res);
        this.listOfCars = res.cars; // ✅ تعديل هنا
      },
      error: (err: any) => {
        console.error('Error loading cars:', err);
      },
      complete: () => {
        console.log('All cars loaded successfully.');
      },
    });
  }
}
