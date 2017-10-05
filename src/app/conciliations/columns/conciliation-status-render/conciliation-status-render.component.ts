import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'app-conciliation-status-render',
  templateUrl: './conciliation-status-render.component.html',
  styleUrls: ['./conciliation-status-render.component.css']
})
export class ConciliationStatusRenderComponent implements ViewCell, OnInit {

    //renderValue: string;

    @Input() value: string | number;
    @Input() rowData: any;

    ngOnInit() {
        //this.renderValue = 'asd';//this.value.toString().toUpperCase();
    }

}
