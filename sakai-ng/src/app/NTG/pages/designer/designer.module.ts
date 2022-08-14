import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignerRoutingModule } from './designer-routing.module';
import { DesignerFormComponent } from './designer-form/designer-form.component';
import { ShipComponent } from './ship/ship.component';


@NgModule({
  declarations: [
    DesignerFormComponent,
    ShipComponent
  ],
  imports: [
    CommonModule,
    DesignerRoutingModule
  ]
})
export class DesignerModule { }
