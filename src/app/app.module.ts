import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import { Ng2smartComponent } from './ng2smart/ng2smart.component';
import {CustomRenderComponent} from './ng2smart/custom-render.component';

@NgModule({
  entryComponents: [CustomRenderComponent],
  declarations: [
    AppComponent,
    Ng2smartComponent,
      CustomRenderComponent,
  ],
  imports: [
    BrowserModule,
    Ng2SmartTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }