import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';


import { AppComponent } from './app.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';


import { CreatehospitalComponent } from './createhospital/createhospital.component';
import { ScheduleMaintenanceComponent } from './schedule-maintenance/schedule-maintenance.component';
import { RequestequipmentComponent } from './requestequipment/requestequipment.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { OrdersComponent } from './orders/orders.component';
import { TeamComponent } from './team/team.component';
// import { StatusTechinicanComponent } from './status-techinican/status-techinican.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MeetTeamComponent } from './meet-team/meet-team.component';

const routes: Routes = [
  { path:'homepage',component:HomepageComponent},
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'dashboard', component: DashbaordComponent },
  { path: 'createhospital', component: CreatehospitalComponent },  
  { path: 'schedule-maintenance', component: ScheduleMaintenanceComponent },  
  { path: 'requestequipment', component: RequestequipmentComponent },  
  { path: 'maintenance', component: MaintenanceComponent },  
  { path: 'orders', component: OrdersComponent },
  { path: 'team', component: TeamComponent },
  {path:'meet-team',component:MeetTeamComponent},
  // {path:'status-techinican',component:StatusTechinicanComponent} , 
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'team', component: TeamComponent },  
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },

  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
