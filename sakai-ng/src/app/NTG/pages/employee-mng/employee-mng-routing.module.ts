import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeListComponent} from "./employee-list/employee-list.component";

const routes: Routes = [

    {path: 'list', component: EmployeeListComponent},
    {path: '**', redirectTo: 'list'}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeeMngRoutingModule {
}
