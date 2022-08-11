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
        {field: 'recID', header: 'ID #', customExportHeader: 'Employee ID'},
        {field: 'fullName', header: 'Name'},
        {field: 'userName', header: 'User Name'}
    ];


    constructor(private _http: HttpClient) {
    }

    ngOnInit(): void {

        setTimeout(() => {

            this.LoadData();


        }, 100);

    }

    private LoadData() {
        this._http.get('/rest/users/list').subscribe(
            (resp: any) => {

                this.EmployeeData = resp;


            }, error => {


            }
        );
    }

    ShowAddDialog = false;
    userName: any;
    full_name: any;

    DoAdd() {
        this.ShowAddDialog = true;
    }

    IsPostingData = false;

    HandleAdd() {
        this.IsPostingData = true;

        let body = {
            "recID": -1,
            "userName": this.userName,
            "manager_id": -1,
            "password": "ntg",
            "fullName": this.full_name
        };
        let url = '/rest/addUser';
        this._http.post(url, body).subscribe((rep: any) => {

            if (rep.returnValue) {
                this.ShowAddDialog = false;
                this.EmployeeData?.push(rep.returnValue);

                this.refreshAray();

            } else {
                alert(rep.errorMessage);
            }

            this.IsPostingData = false;

        }, error => {

            alert(error.message || error);
            this.IsPostingData = false;

        })
    }

    private refreshAray() {
        let temp = this.EmployeeData;
        this.EmployeeData = [];

        temp?.forEach(row=>this.EmployeeData?.push(row));
    }
}
