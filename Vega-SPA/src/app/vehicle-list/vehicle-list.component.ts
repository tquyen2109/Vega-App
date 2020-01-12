import { VehicleService } from './../services/vehicle.service';
import { Vehicle, KeyValuePair } from './../Models/vehicle';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  vehicles: Vehicle[];
  makes: KeyValuePair[];
  filter: any = {};
  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.populateVehicles();
    this.vehicleService.getMakes()
      .subscribe((makes: KeyValuePair[]) => this.makes = makes);
  }
  //Small dataset use client side filter
  // onFilterChange(){
  //   var vehicles = this.allVehicles;
  //   if(this.filter.makeId)
  //     vehicles = vehicles.filter(v => v.make.id == this.filter.makeId);

  //   if(this.filter.modelId)
  //     vehicles = vehicles.filter(v => v.model.id == this.filter.modelId);
  //   this.vehicles = vehicles;
  // }

  //Serverside filter
  private populateVehicles(){
    this.vehicleService.getVehicles(this.filter)
    .subscribe((vehicles: Vehicle[]) => this.vehicles = vehicles);
  }
  onFilterChange(){
    //this.filter.modelId = 2;
    this.populateVehicles();
  }
  resetFilter() {
    this.filter = {};
    this.onFilterChange();
  }

}
