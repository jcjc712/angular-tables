import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'app-conciliation-confirm-render',
  templateUrl: './conciliation-confirm-render.component.html',
  styleUrls: ['./conciliation-confirm-render.component.css']
})
export class ConciliationConfirmRenderComponent implements ViewCell, OnInit {
    @Input() value: string | number;
    @Input() rowData: any;
    ngOnInit() {
    }
}
