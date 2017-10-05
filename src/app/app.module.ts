import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import { Ng2smartComponent } from './ng2smart/ng2smart.component';
import {CustomRenderComponent} from './ng2smart/custom-render.component';
import { ConciliationsComponent } from './conciliations/conciliations.component';

/*Alert*/
import { AlertComponent } from './tools/toaster/_directives/index';
import { AlertService } from './tools/toaster/_services/index';
/*Modals*/
import { ModalComponent } from './tools/modal/modal/modal.component';
import {ModalService} from './tools/modal/modal/modal.service';
/*General Modal*/
import { GeneralModalComponent } from './tools/general-modal/general-modal.component';
import {GeneralModalService} from './tools/general-modal/general-modal.service';

import { ConciliationStatusRenderComponent } from './conciliations/columns/conciliation-status-render/conciliation-status-render.component';
import { ConciliationInfoRenderComponent } from './conciliations/columns/conciliation-info-render/conciliation-info-render.component';
import { ConciliationResponseRenderComponent } from './conciliations/columns/conciliation-response-render/conciliation-response-render.component';
import { ConciliationConfirmRenderComponent } from './conciliations/columns/conciliation-confirm-render/conciliation-confirm-render.component';

@NgModule({
  entryComponents: [
      CustomRenderComponent,
      /*Conciliations*/
      ConciliationStatusRenderComponent,
      ConciliationInfoRenderComponent,
      ConciliationResponseRenderComponent,
      ConciliationConfirmRenderComponent
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    Ng2smartComponent,
      CustomRenderComponent,
      ConciliationsComponent,
    AlertComponent,
    ModalComponent,
      ConciliationStatusRenderComponent,
      ConciliationInfoRenderComponent,
      ConciliationResponseRenderComponent,
      ConciliationConfirmRenderComponent,
      GeneralModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SmartTableModule,
    AppRoutingModule,
  ],
  providers: [
    AlertService,
    ModalService,
      GeneralModalService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
