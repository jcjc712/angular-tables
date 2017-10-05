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
@NgModule({
  entryComponents: [CustomRenderComponent],
  declarations: [
    AppComponent,
    HeaderComponent,
    Ng2smartComponent,
      CustomRenderComponent,
      ConciliationsComponent,
    AlertComponent,
    ModalComponent
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
