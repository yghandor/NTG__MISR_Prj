import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeMngRoutingModule } from './employee-mng-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';

import {HttpClientModule} from "@angular/common/http";

import {NTGTreeTableModule} from "../../components/ntgtree-table/ntgtree-table.module";
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from "primeng/button";
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    EmployeeListComponent
  ],
    imports: [
        CommonModule, NTGTreeTableModule,
        EmployeeMngRoutingModule, HttpClientModule, DialogModule, ButtonModule, InputTextModule, FormsModule
    ]
})
export class EmployeeMngModule { }
