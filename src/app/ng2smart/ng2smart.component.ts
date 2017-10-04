import { Component, OnInit } from '@angular/core';
import {CustomRenderComponent} from './custom-render.component';
import { Http } from '@angular/http';
import {TransformLocalService} from './transform-local.service';
import {MyServerDataSourceService} from '../shared/smart-table/my-server-data-source.service';
@Component({
  selector: 'app-ng2smart',
  templateUrl: './ng2smart.component.html',
  styleUrls: ['./ng2smart.component.css'],
})
export class Ng2smartComponent implements OnInit {
    settings = {
        edit: {
          editButtonContent: '<i class="fa fa-pencil" aria-hidden="true"></i>',
          editButtonClass: 'btn btn-primary btn-sm'
        },
        delete: {
            deleteButtonContent: '<i class="fa fa-trash" aria-hidden="true"></i>',
            deleteButtonClass: 'btn btn-danger btn-sm'
            /*attr: {
    class: 'btn btn-success'
}*/
        },
        add: {
            addButtonContent: 'chido'
        },
        actions: {
            //edit: false,
            position: 'right'
          //delete: false,
        },
        mode: 'external',
        //hideSubHeader: true,
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
            username: {
                title: 'Full Name',
                type: 'custom',
                renderComponent: CustomRenderComponent,
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

    data = [
        {
            id: 1,
            name: "Leanne Graham",
            username: "Juanchisas7",
            email: "Sincere@april.biz",
            actions: "<h1>Holis</h1>"
        },
        /*{
            id: 2,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv"
        },
        {
            id: 3,
            name: "Nicholas DuBuque",
            username: "Nicholas.Stanton",
            email: "Rey.Padberg@rosamond.biz"
        },
        {
            id: 4,
            name: "Nicholas DuBuque",
            username: "Nicholas.Stanton",
            email: "Rey.Padberg@rosamond.biz"
        },
        {
            id: 5,
            name: "Nicholas DuBuque",
            username: "Nicholas.Stanton",
            email: "Rey.Padberg@rosamond.biz"
        },
        {
            id: 6,
            name: "Nicholas DuBuque",
            username: "Nicholas.Stanton",
            email: "Rey.Padberg@rosamond.biz"
        },
        {
            id: 7,
            name: "Nicholas DuBuque",
            username: "Nicholas.Stanton",
            email: "Rey.Padberg@rosamond.biz"
        },
        {
            id: 8,
            name: "Nicholas DuBuque",
            username: "Nicholas.Stanton",
            email: "Rey.Padberg@rosamond.biz"
        },
        {
            id: 9,
            name: "Nicholas DuBuque",
            username: "Nicholas.Stanton",
            email: "Rey.Padberg@rosamond.biz"
        },
        {
            id: 10,
            name: "Nicholas DuBuque",
            username: "Nicholas.Stanton",
            email: "Rey.Padberg@rosamond.biz"
        },
        {
            id: 11,
            name: "Nicholas DuBuque",
            username: "Nicholas.Stanton",
            email: "Rey.Padberg@rosamond.biz"
        },
        {
            id: 12,
            name: "Nicholas DuBuque",
            username: "Nicholas.Stanton",
            email: "Rey.Padberg@rosamond.biz"
        }*/
    ];

    //source: LocalDataSource; // add a property to the component
    /*constructor() {
        this.source = new LocalDataSource(this.data); // create the source
    }*/
    source: MyServerDataSourceService;

    constructor(http: Http) {
        //this.source = new ServerDataSource(http, { endPoint: 'https://jsonplaceholder.typicode.com/photos'});
        this.source = new MyServerDataSourceService(http, { endPoint: 'http://127.0.0.1:8000/api', sortFieldKey: 'orden'});
        this.source.setTransformClass(new TransformLocalService());
        //this.source = new LocalDataSource(this.data);
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
        /*estás seguro que quieres borrar*/
        /*logica de borrado*/
        this.source.remove(event.data);
        //console.log(event);
    }
    updateItem(event) {
        const deviceDetails = event.data;
        const updatedData = deviceDetails;

// activate/deactivate
        if ( deviceDetails['status'] === 'active') {
            updatedData['status'] = 'inactive';
            this.source.update(deviceDetails, updatedData);
        } else {
            updatedData['status'] = 'active';
            this.source.update(deviceDetails, updatedData);
        }
    }
}
