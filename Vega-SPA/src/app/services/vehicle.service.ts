import { SaveVehicle } from './../Models/vehicle';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private baseUrl ='http://localhost:5000';
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
  update(vehicle: SaveVehicle)
  {
    return this.http.put(this.baseUrl + '/api/vehicles/' + vehicle.id, vehicle)
  }
  delete(id)
  {
    return this.http.delete(this.baseUrl + '/api/vehicles/' + id);
  }
  getVehicles(filter){
    return this.http.get(this.baseUrl + '/api/vehicles/' + '?' + this.toQueryString(filter));
  }

  toQueryString(obj){
    var parts = [];
    for(var property in obj)  {
      var value = obj[property];
      if(value != null && value != undefined)
        parts.push(encodeURIComponent(property)+ '=' + encodeURIComponent(value));
    }
    return parts.join('&');
  }
}
