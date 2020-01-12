import { SaveVehicle, Vehicle } from '../Models/vehicle';
import { ToastyModule, ToastyService } from 'ng2-toasty';
import { VehicleService } from '../services/vehicle.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/Observable/forkJoin';
import * as _ from 'underscore';
@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {

  constructor(
              private route: ActivatedRoute, //to read route parameter
              private router: Router, //navigate uset to different page
              private vehicleService: VehicleService,
              private toastyService: ToastyService) { 
                route.params.subscribe(p => {
                  this.vehicle.id = +p['id']; // + is for converting to number
                });
              }
  makes: any[];
  features: any[];
  vehicle: SaveVehicle ={
    id: 0,
    makeId: 0,
    modelId: 0,
    isRegistered: false,
    features: [],
    contact: {
      name: '',
      phone: '',
      email: ''
    }
  };
  models: any[];
  ngOnInit() {
    var sources = [
      this.vehicleService.getMakes(),
      this.vehicleService.getFeatures(),
    ];

    if (this.vehicle.id)
    {
      sources.push(this.vehicleService.getVehicle(this.vehicle.id));
    }
    //forJoin to work with different Observable parallel
    Observable.forkJoin(sources).subscribe((data:any) => {
      this.makes = data[0];
      this.features = data[1];
      if (this.vehicle.id){
        this.setVehiclle(data[2]);
        this.populateModels();
      }
    }, err => {
      if (err.status === 404)
      {
       this.router.navigate(['/home']);
      }
    });
    }

  private setVehiclle(v:Vehicle){
    this.vehicle.id = v.id;
    this.vehicle.makeId = v.make.id;
    this.vehicle.modelId = v.model.id;
    this.vehicle.isRegistered = v.isRegistered;
    this.vehicle.contact = v.contact;
    this.vehicle.features = _.pluck(v.features,'id');

  }
  onMakeChange() {
    this.populateModels();
    delete this.vehicle.modelId;
  }

  private populateModels() {
    var selectedMake = this.makes.find(m => m.id == this.vehicle.makeId);
    this.models = selectedMake ? selectedMake.models : [];
  }

  onFeatureToggle(featureId, $event)
  {
    if ($event.target.checked)
      this.vehicle.features.push(featureId);
    else {
      var index = this.vehicle.features.indexOf(featureId);
      this.vehicle.features.splice(index,1);
    }
  }
  submit()
  {
    if(this.vehicle.id){
      this.vehicleService.update(this.vehicle)
        .subscribe(x => {
          this.toastyService.success({
            title: 'Success',
            msg: 'The vehicle was successfully updated.',
            theme: 'bootstrap',
            showClose: true,
            timeout: 5000
          });
        });
    }
    else {
    this.vehicleService.create(this.vehicle)
      .subscribe(
        x => console.log(x));
    }
  }
  delete(){
    if(confirm("Are you sure ?")){
      this.vehicleService.delete(this.vehicle.id)
        .subscribe(x => {
          this.router.navigate(['/home']);
        });
    }
  }

  
}
