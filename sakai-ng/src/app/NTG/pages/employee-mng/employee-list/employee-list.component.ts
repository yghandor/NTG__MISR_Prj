import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
    EmployeeData: any[] | undefined;
    cols: any = [
        { field: 'recID', header: 'ID #', customExportHeader: 'Employee ID' },
        { field: 'fullName', header: 'Name' },
        { field: 'userName', header: 'User Name' }
     ];



    constructor(private _http: HttpClient) {
    }

    ngOnInit(): void {

        setTimeout(() => {

            this.LoadData();


        }, 1000);

    }

    private LoadData() {
        this._http.get('/rest/users/list').subscribe(
            (resp: any) => {

                this.EmployeeData = resp;


            }, error => {


            }
        );
    }
}
