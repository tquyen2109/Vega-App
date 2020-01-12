import { ToastyModule, ToastyService } from 'ng2-toasty';
import { VehicleService } from '../services/vehicle.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/Observable/forkJoin';
@Component({
  selector: 'app-vehical-form',
  templateUrl: './vehical-form.component.html',
  styleUrls: ['./vehical-form.component.css']
})
export class VehicalFormComponent implements OnInit {

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
  vehicle: any ={
    features: [],
    contact: {}
  };
  models: any[];
  ngOnInit() {
    var sources = [
      this.vehicleService.getMakes(),
      this.vehicleService.getFeatures(),
    ];

    if (this.vehicle.id)
      sources.push(this.vehicleService.getVehicle(this.vehicle.id));
    //forJoin to work with different Observable parallel
    Observable.forkJoin(sources).subscribe((data:any) => {
      this.makes = data[0];
      this.features = data[1];
      if (this.vehicle.id)
        this.vehicle = data[2];
    }, err => {
      if (err.status == 404)
        this.router.navigate(['/home']);
    });
    }
  onMakeChange(){
    var selectedMake = this.makes.find(m => m.id == this.vehicle.makeId);
    this.models = selectedMake ? selectedMake.models : [];
    delete this.vehicle.modelId;
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
    this.vehicleService.create(this.vehicle)
      .subscribe(
        x => console.log(x));
  }

  
}
