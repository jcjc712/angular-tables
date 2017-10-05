import { Component, OnInit, OnDestroy } from '@angular/core';
import {ModalService} from './tools/modal/modal/modal.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private modalService: ModalService) {}
  subscribeModal: Subscription;
  ngOnInit() {
    /*respuesta modal*/
  }
  openModal() {
    this.subscribeModal = this.modalService.callComponentMethod(
        { title: '¿Estas seguro?',
          body: 'El contenido que va en el centro y bla bla',
          confirmButtonName: 'Aceptar'}
    ).subscribe(
        (pasams: any) => {
          this.responseModal();
          /*To unsubscribe this subscription, without this the content is call many times*/
          this.subscribeModal.unsubscribe();
        });
  }
  responseModal() {
    console.log('respuesta');
  }
  ngOnDestroy() {
    this.subscribeModal.unsubscribe();
  }
}
