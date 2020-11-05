import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LocationListComponent } from './location-list';
import { LocationDetailComponent } from './location-detail';

import { LocationsRoutingModule } from './locations-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LocationEditComponent } from './location-edit/location-edit.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LocationsRoutingModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
  ],
  declarations: [
    LocationListComponent,
    LocationDetailComponent,
    LocationEditComponent
  ]
})
export class LocationsModule { }
