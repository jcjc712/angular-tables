import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import {GeneralModalService} from '../../../tools/general-modal/general-modal.service';
declare var jQuery: any;
@Component({
  selector: 'app-conciliation-info-render',
  templateUrl: './conciliation-info-render.component.html',
  styleUrls: ['./conciliation-info-render.component.css']
})
export class ConciliationInfoRenderComponent implements ViewCell, OnInit {
    @Input() value: string | number;
    @Input() rowData: any;
    @ViewChild('myModal') myModal: ElementRef;
    constructor(private generalModal: GeneralModalService) {
    }
    ngOnInit() {
    }

    showInfo() {
        jQuery(this.myModal.nativeElement).modal('show');
    }
    closeModal() {
        jQuery(this.myModal.nativeElement).modal('hide');
    }
}
