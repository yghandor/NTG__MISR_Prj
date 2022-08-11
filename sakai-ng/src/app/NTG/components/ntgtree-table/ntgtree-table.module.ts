import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NTGTreeTableComponent} from "./ntgtree-table.component";

import {TreeTableModule} from 'primeng/treetable';

import {ButtonModule} from "primeng/button";
import {TreeModule} from 'primeng/tree';

@NgModule({
    declarations: [NTGTreeTableComponent],
    imports: [
        CommonModule,TreeTableModule,ButtonModule,TreeModule
    ], exports: [NTGTreeTableComponent]
})
export class NTGTreeTableModule {
}
