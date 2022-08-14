import {Component, Input, OnInit} from '@angular/core';
import {ShipInfo} from "../ShipInfo";

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent implements OnInit {


  TextWidth : number = 0;


  @Input('info')
  set setinfo(info : ShipInfo){
    this.info = info;
    this.TextWidth = this.getTextWidth(info.label);
    if(this.TextWidth > info.width){
      info.width = this.TextWidth + 40;
    }
  }
  info : ShipInfo | undefined;

  constructor() { }


  ngOnInit(): void {
  }


  getTextWidth(text : string) {
    // re-use canvas object for better performance
    const canvas = document.createElement("canvas");
    const context :any = canvas.getContext("2d");
    context.font = "45px Verdana  " ;
    const metrics = context.measureText(text);
    return metrics.width;
  }

}
