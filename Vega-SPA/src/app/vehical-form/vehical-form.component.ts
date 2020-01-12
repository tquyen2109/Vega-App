import { ToastyModule, ToastyService } from 'ng2-toasty';
import { VehicleService } from '../services/vehicle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehical-form',
  templateUrl: './vehical-form.component.html',
  styleUrls: ['./vehical-form.component.css']
})
export class VehicalFormComponent implements OnInit {

  constructor(private vehicleService: VehicleService,
              private toastyService: ToastyService) { }
  makes: any[];
  features: any[];
  vehicle: any ={
    features: [],
    contact: {}
  };
  models: any[];
  ngOnInit() {
    this.vehicleService.getMakes().subscribe((makes: any[]) =>
      this.makes = makes);
    this.vehicleService.getFeatures().subscribe((features: any[]) =>
      this.features = features);
    
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
        x => console.log(x),
        err => {
          this.toastyService.error({
            title:'Error',
            msg:'An unexpected error happened.',
            theme: 'bootstrap',
            showClose: true,
            timeout: 5000
          });
        });
  }

  
}
