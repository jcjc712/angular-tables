import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConciliationsComponent} from './conciliations/conciliations.component';
const appRoutes: Routes = [
    {   path: '', redirectTo: '/example', pathMatch: 'full'},
    {   path: 'example', component: ConciliationsComponent },
];
@NgModule({
    imports: [ RouterModule.forRoot(appRoutes, { useHash: true }) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}