import { VehicleService } from './../services/vehicle.service';
import { Vehicle } from './../Models/vehicle';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  vehicles: Vehicle[];
  constructor(private vehicalService: VehicleService) { }

  ngOnInit() {
    this.vehicalService.getVehicles()
      .subscribe((vehicles: Vehicle[]) => this.vehicles = vehicles);
  }

}
