import { Component, OnInit } from '@angular/core';
import { ApisService } from '../Services/Apis.service';
import { Icars } from '../interfaces/Icars';

@Component({
  selector: 'app-rental-deals',
  templateUrl: './rental-deals.component.html',
  styleUrls: ['./rental-deals.component.css'],
})
export class RentalDealsComponent implements OnInit {
  listOfCars: Icars[] = [];
  carNAme: string = '';

  constructor(private _Apis: ApisService) {}

  ngOnInit(): void {
    this.loadAllCars();
  }

  loadAllCars(): void {
    this._Apis.GetAllCars().subscribe({
      next: (res) => {
        console.log('All cars loaded:', res);
        this.listOfCars = Array.isArray(res) ? res : res.cars;
      },
      error: (err) => {
        console.error('Error loading cars:', err);
      }
    });
  }

  searchByName(): void {
    if (!this.carNAme.trim()) {
      this.loadAllCars();
      return;
    }

    this._Apis.GetCarByName(this.carNAme).subscribe({
      next: (res) => {
        console.log('Search result:', res);
        this.listOfCars = Array.isArray(res) ? res : res.Cars;
      },
      error: (err) => {
        console.error('Error searching cars:', err);
      }
    });
  }
}
