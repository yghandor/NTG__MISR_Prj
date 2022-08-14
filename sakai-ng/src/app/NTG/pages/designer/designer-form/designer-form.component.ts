import {Component, OnInit} from '@angular/core';
import {ShipInfo} from "../ShipInfo";

@Component({
  selector: 'app-designer-form',
  templateUrl: './designer-form.component.html',
  styleUrls: ['./designer-form.component.scss']
})
export class DesignerFormComponent implements OnInit {


  ShipsData: ShipInfo[] = [

    {label: 'Hello ', height: 100, width: 300, top: 50, left: 100},
    {label: 'SVG2', height: 100, width: 200, top: 200, left: 200}

  ];

  ToolBarInfo: ShipInfo[] = [

    {label: 'Ship', height: 50, width: 120, top: 20, left: 15},

  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  SelectedShip: ShipInfo | undefined;
  LastX: number = 0;
  LastY: number = 0;

  HandleShipSlection(ship: ShipInfo, $event: MouseEvent) {
    $event.preventDefault();
    this.SelectedShip = ship;
    this.LastX = $event.x;
    this.LastY = $event.y;
  }

  HandleMouseUp() {
    this.SelectedShip = undefined;
  }

  HandleMouseMove($event: MouseEvent) {

    if (this.SelectedShip) {

      let dx = $event.x - this.LastX;
      let dy = $event.y - this.LastY;

      this.SelectedShip.top += dy;
      this.SelectedShip.left += dx;

      this.LastX = $event.x;
      this.LastY = $event.y;

    }
  }

  SelectedShipForDrop: ShipInfo | undefined;

  handleDragStart(ship: ShipInfo) {
    this.SelectedShipForDrop = ship;
  }

  HandleDrop($event: DragEvent, drawdiv: HTMLDivElement) {
    if (this.SelectedShipForDrop) {
      let newShip: ShipInfo = {...this.SelectedShipForDrop};
      this.SelectedShipForDrop = undefined;

      newShip.label = 'New Text #' + (this.ShipsData.length + 1);

      let rec  = drawdiv.getBoundingClientRect();

      newShip.top = $event.y - rec.y;
      newShip.left = $event.x -  rec.x;

      this.ShipsData.push(newShip);

    }
  }
}
