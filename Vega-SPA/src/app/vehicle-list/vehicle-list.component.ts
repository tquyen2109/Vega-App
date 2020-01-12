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
  query: any = {};
  columns = [
    {title: 'Id', key: 'id'},
    {title: 'Make', key: 'make', isSortable:true},
    {title: 'Model', key: 'model', isSortable:true},
    {title: 'Contact Name', key: 'contactName', isSortable:true}, 
    {}
  ];
  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.populateVehicles();
    this.vehicleService.getMakes()
      .subscribe((makes: KeyValuePair[]) => this.makes = makes);
  }
  //Small dataset use client side query
  // onFilterChange(){
  //   var vehicles = this.allVehicles;
  //   if(this.query.makeId)
  //     vehicles = vehicles.query(v => v.make.id == this.query.makeId);

  //   if(this.query.modelId)
  //     vehicles = vehicles.query(v => v.model.id == this.query.modelId);
  //   this.vehicles = vehicles;
  // }

  //Serverside query
  private populateVehicles(){
    this.vehicleService.getVehicles(this.query)
    .subscribe((vehicles: Vehicle[]) => this.vehicles = vehicles);
  }
  onFilterChange(){
    //this.query.modelId = 2;
    this.populateVehicles();
  }
  resetFilter() {
    this.query = {};
    this.onFilterChange();
  }
  sortBy(columnName){
    if(this.query.sortBy == columnName){
      this.query.isSortAscending = !this.query.isSortAscending;
    }
    else{
      this.query.sortBy = columnName;
      this.query.isSortAscending = true;
    }
    this.populateVehicles();
  }
}
