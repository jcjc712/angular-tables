import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'app-conciliation-response-render',
  templateUrl: './conciliation-response-render.component.html',
  styleUrls: ['./conciliation-response-render.component.css']
})
export class ConciliationResponseRenderComponent implements ViewCell, OnInit {

    //renderValue: string;

@Input() value: string | number;
@Input() rowData: any;

    ngOnInit() {
        //this.renderValue = 'asd';//this.value.toString().toUpperCase();
    }
}
