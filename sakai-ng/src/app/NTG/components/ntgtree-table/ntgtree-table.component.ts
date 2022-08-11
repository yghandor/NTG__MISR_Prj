import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TreeNode} from "primeng/api";

@Component({
    selector: 'app-ntgtree-table',
    templateUrl: './ntgtree-table.component.html',
    styleUrls: ['./ntgtree-table.component.scss']
})
export class NTGTreeTableComponent implements OnInit {
    @Input('inputData')
    set setinputData(inputData: any) {

        this.inputData = inputData;

        this.convertedData = [];
        if (this.inputData && this.inputData.length > 0) {
            this.ConvertData(this.inputData, this.convertedData, -1);
        }
        console.log(inputData);
        console.log(this.convertedData);
    }

    inputData: any[] | undefined;

    @Input()
    cols: any = [];
    convertedData: TreeNode[] = [];

    @Input()
    ParentFieldName = 'manager_id';

    @Input()
    PrimaryFIeldName = 'recID';

    @Input()
    EnableAdd=false;

    @Output()
    AddClicked : EventEmitter<any> = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit(): void {
    }

    private ConvertData(inputData: any[], convertedData: TreeNode[], ParentRowID: number) {
         for (let i = 0; i < inputData.length; i++) {

            let parentID = inputData[i][this.ParentFieldName];
            if (parentID == ParentRowID) {

                let row: TreeNode = {};
                row.children = [];
                row.data = inputData[i];

                let id = inputData[i][this.PrimaryFIeldName];

                this.ConvertData(inputData,row.children ,id);

                convertedData.push(row);
            }

        }

    }

    Add( ) {
        this.AddClicked.emit();
    }
}
