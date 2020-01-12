import { VehicleService } from './../services/vehicle.service';
import { Vehicle, KeyValuePair } from './../Models/vehicle';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  private readonly PAGE_SIZE = 3
  queryResult: any = {};
  makes: KeyValuePair[];
  query: any = {
    pageSize: this.PAGE_SIZE
  };
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
    .subscribe((result: Vehicle[]) => this.queryResult = result);
  }
  onFilterChange(){
    //this.query.modelId = 2;
    this.query.page = 1;
    this.populateVehicles();
  }
  resetFilter() {
    this.query = {
      page:1,
      pageSize: this.PAGE_SIZE
    };
    this.populateVehicles();
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
  onPageChange(page){
    this.query.page = page;
    this.populateVehicles();
  }
}
