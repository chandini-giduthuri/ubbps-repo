import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {LandingpageComponent} from './landingpage/landingpage.component'
import { ArrivaldataComponent} from './arrivaldata/arrivaldata.component'
import {AuctionDashboardComponent } from './auction-dashboard/auction-dashboard.component';
import {MandimasterComponent } from './mandimaster/mandimaster.component';
import { RoleMasterComponent } from './role-master/role-master.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewceilingComponent } from './viewceiling/viewceiling.component';

const routes: Routes = [
  {
      path: 'login',
      component: LoginComponent
  },
  {
    path: '',
    component: LandingpageComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard', // child route path
        component: DashboardComponent, // child route component that the router renders
      },
      {
        path: 'arrivaldata', // child route path
        component: ArrivaldataComponent, // child route component that the router renders
      },
      {
        path: 'viewceiling', // child route path
        component: ViewceilingComponent, // child route component that the router renders
      },
      {
        path: 'auctiondashboard', // child route path
        component: AuctionDashboardComponent, // child route component that the router renders
      },
      {
        path: 'mandimaster',
        component: MandimasterComponent, // another child route component that the router renders
      },
      {
        path: 'rolemaster',
        component: RoleMasterComponent, // another child route component that the router renders
      },
    ],
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
