import { Component, OnInit } from '@angular/core';
import {MyServerDataSourceService} from '../shared/smart-table/my-server-data-source.service';
import { Http } from '@angular/http';
import {ConciliationTransformResponse} from './conciliation-transform-response';
import {ConciliationStatusRenderComponent} from './columns/conciliation-status-render/conciliation-status-render.component';
import {ConciliationInfoRenderComponent} from "./columns/conciliation-info-render/conciliation-info-render.component";
import {ConciliationResponseRenderComponent} from "./columns/conciliation-response-render/conciliation-response-render.component";
import {ConciliationConfirmRenderComponent} from "./columns/conciliation-confirm-render/conciliation-confirm-render.component";
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
        add: false,
        edit: false,
        delete: false,
      position: 'right'
    },
    mode: 'external',
    hideSubHeader: true,
    noDataMessage: 'Sin datos',
    attr: {
      class: 'table table-responsive'
    },
    columns: {
      id_t_incidencias_conciliacion_mit: {
        title: 'Id. Incid.',
        filter: false,
          type: 'custom',
          renderComponent: ConciliationInfoRenderComponent,
      },
      id_t_conciliaciones_mit: {
        title: 'Id. Concil.',
        filter: false,
      },
      detail: {
        title: 'Detalle',
        filter: false,
        sort: false,
      },
        fecha_creacion: {
            title: 'Creación',
            filter: false,
        },
        updated: {
            title: 'Actual.',
            filter: false,
            sort: false,
        },
        nb_response: {
            title: 'Nb. Respuesta',
            filter: false,
            type: 'custom',
            renderComponent: ConciliationResponseRenderComponent,
    },
        nu_operation: {
            title: 'No. Operación',
            filter: false,
        },
        tp_operation: {
            title: 'Tipo. Autoriz.',
            filter: false,
        },
        nu_auth: {
            title: 'No. Autoriz.',
            filter: false,
        },
        estatus: {
            title: 'Estatus',
            filter: false,
            type: 'custom',
            renderComponent: ConciliationStatusRenderComponent,
        },
      actions: {
        title: 'Confirmar',
          sort: false,
          type: 'custom',
          renderComponent: ConciliationConfirmRenderComponent,
  }
    }
  };
  source: MyServerDataSourceService;
  constructor(private http: Http) {
    this.source = new MyServerDataSourceService(http, {
          endPoint: 'http://back.pagofacil.local.net/TarjetaPresente/Mit_Services_IncidenciasConciliacion/incidencias?idConciliacion=425',//?iDisplayLength=10&iDisplayStart=0&idConciliacion=425&filtroEstatus=1',
          //pagerLimitKey: 'iDisplayLength',
        });
    this.source.setTransformClass(new ConciliationTransformResponse());
  }

  ngOnInit() {
  }

  onSearch(query: string = '') {
    console.log(query);
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'status',
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
