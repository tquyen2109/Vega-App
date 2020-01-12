import { AppErrorHandler } from './app-error-handler';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, ErrorHandler, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {ToastyModule} from 'ng2-toasty';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { VehicleService } from './services/vehicle.service';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';




@NgModule({
  declarations: [
    AppComponent,
    VehicleFormComponent,
    NavmenuComponent,
    HomeComponent,
    VehicleListComponent
  ],
  imports: [
    BrowserModule,
    ToastyModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', redirectTo:'vehicles', pathMatch:'full'},
      {path: 'home', component: HomeComponent},
      {path: 'vehicles/new', component: VehicleFormComponent},
      {path: 'vehicles/:id', component: VehicleFormComponent},
      {path: 'vehicles', component: VehicleListComponent}

      
    ])
  ],
  providers: [
    {provide: ErrorHandler, useClass: AppErrorHandler},
    VehicleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
