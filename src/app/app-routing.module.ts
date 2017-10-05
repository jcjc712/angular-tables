import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ng2smartComponent } from './ng2smart/ng2smart.component';
const appRoutes: Routes = [
    {   path: '', redirectTo: '/example', pathMatch: 'full'},
    {   path: 'example', component: Ng2smartComponent },
];
@NgModule({
    imports: [ RouterModule.forRoot(appRoutes, { useHash: true }) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}