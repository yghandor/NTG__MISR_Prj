import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeMngRoutingModule } from './employee-mng-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';

import {TableModule} from 'primeng/table';
import {HttpClientModule} from "@angular/common/http";
import {ButtonModule} from "primeng/button";

@NgModule({
  declarations: [
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    EmployeeMngRoutingModule,TableModule,HttpClientModule,ButtonModule
  ]
})
export class EmployeeMngModule { }
