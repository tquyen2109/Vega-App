import { AppErrorHandler } from './app-error-handler';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {ToastyModule} from 'ng2-toasty';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { VehicleService } from './services/vehicle.service';
import { VehicalFormComponent } from './vehical-form/vehical-form.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicalFormComponent,
    NavmenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ToastyModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'vehicles/new', component: VehicalFormComponent}
      
    ])
  ],
  providers: [
    {provide: ErrorHandler, useClass: AppErrorHandler},
    VehicleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
