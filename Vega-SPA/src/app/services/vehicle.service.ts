import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  baseUrl ='http://localhost:5000';
  constructor(private http: HttpClient) { }
  getMakes(){
    return this.http.get(this.baseUrl + '/api/makes');
  }
  getFeatures(){
    return this.http.get(this.baseUrl + '/api/features');
  }
  create(vehicle)
  {
    return this.http.post(this.baseUrl + '/api/vehicles', vehicle);
  }
  getVehicle(id){
    return this.http.get(this.baseUrl + '/api/vehicles/' + id);
  }
}
