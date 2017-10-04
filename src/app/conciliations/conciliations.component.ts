import { Component, OnInit } from '@angular/core';
import {MyServerDataSourceService} from "../shared/smart-table/my-server-data-source.service";
import { Http } from '@angular/http';
import {ConciliationTransformResponse} from "./conciliation-transform-response";
@Component({
  selector: 'app-conciliations',
  templateUrl: './conciliations.component.html',
  styleUrls: ['./conciliations.component.css']
})
export class ConciliationsComponent implements OnInit {
  settings = {
    edit: {
      editButtonContent: '<i class="fa fa-pencil" style="color:white !important;" aria-hidden="true"></i>',
      editButtonClass: 'btn btn-success btn-sm'
    },
    delete: {
      deleteButtonContent: '<i class="fa fa-pencil" style="color:white !important;" aria-hidden="true"></i>',
      deleteButtonClass: 'btn btn-success btn-sm'
    },
    actions: {
      position: 'right'
    },
    mode: 'external',
    hideSubHeader: true,
    noDataMessage: 'Sin datos',
    attr: {
      class: 'table'
    },
    columns: {
      id: {
        title: 'ID',
        filter: false,
        editable: false
      },
      name: {
        title: 'Full Name',
        filter: false
      },
      email: {
        title: 'Email',
        filter: false,
        editor: {
          type: 'checkbox'
        }
      },
      actions: {
        title: 'Actions',
        type: 'html'
      }
    }
  };
  source: MyServerDataSourceService;
  constructor(private http: Http) {
    this.source = new MyServerDataSourceService(http, { endPoint: 'http://127.0.0.1:8000/api', sortFieldKey: 'orden'});
    this.source.setTransformClass(new ConciliationTransformResponse());
  }

  ngOnInit() {
  }

  onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'id',
        search: query
      },
      {
        field: 'name',
        search: query
      },
      {
        field: 'username',
        search: query
      },
      {
        field: 'email',
        search: query
      }
    ], false);
  }

  deleteItem(event) {
    this.source.remove(event.data);
  }
  updateItem(event) {
    const deviceDetails = event.data;
    const updatedData = deviceDetails;
    if ( deviceDetails['status'] === 'active') {
      updatedData['status'] = 'inactive';
      this.source.update(deviceDetails, updatedData);
    } else {
      updatedData['status'] = 'active';
      this.source.update(deviceDetails, updatedData);
    }
  }
}
