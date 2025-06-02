import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApisService {
  constructor(private _HttpClient: HttpClient) {}

  GetAllCars(): Observable<any> {
    return this._HttpClient.get('https://myfakeapi.com/api/cars/');
  }
   GetCarByName(carName:string): Observable<any> {
    return this._HttpClient.get(`https://myfakeapi.com/api/cars/name/${carName}`);
  }
   GetCarById(carID:number): Observable<any> {
    return this._HttpClient.get(`https://myfakeapi.com/api/cars/${carID}`);
  }
}
