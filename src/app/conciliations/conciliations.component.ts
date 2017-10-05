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
      idIncidence: {
        title: 'IdIncidencia',
        filter: false,
        editable: false
      },
      idConciliation: {
        title: 'IdConciliación',
        filter: false
      },
      detail: {
        title: 'Detalle',
        filter: false,
      },
        created: {
            title: 'Creación',
            filter: false,
        },
        updated: {
            title: 'Actualización',
            filter: false,
        },
        nbResponse: {
            title: 'Nb Respuesta',
            filter: false,
        },
        operationNumber: {
            title: 'No. Operación',
            filter: false,
        },
        authorizationType: {
            title: 'Tipo. Autoriz.',
            filter: false,
        },
        authorizationNumber: {
            title: 'No. Autoriz.',
            filter: false,
        },
        status: {
            title: 'Estatus',
            filter: false,
        },
      actions: {
        title: 'Confirmar',
        type: 'html'
      }
    }
  };
  source: MyServerDataSourceService;
  constructor(private http: Http) {
    this.source = new MyServerDataSourceService(http, {
          endPoint: 'http://back.pagofacil.local.net/TarjetaPresente/Mit_Services_IncidenciasConciliacion/incidencias?iDisplayLength=10&iDisplayStart=0&idConciliacion=425&filtroEstatus=1',
          pagerLimitKey: 'iDisplayLength',
        });
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
