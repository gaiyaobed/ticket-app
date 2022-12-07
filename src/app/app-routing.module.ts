import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {HomeComponent} from "./home/home.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {DashboardLayoutComponent} from "./dashboard-layout/dashboard-layout.component";
import {HistoryComponent} from "./history/history.component";
import {CompleteRegistrationComponent} from "./complete-registration/complete-registration.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: "Home"
  },
  {
    path: 'login',
    component: LoginComponent,
    title: "Login"
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: "Register"
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: "Dashboard"
  },
  {
    path: 'registration/:id',
    component: CompleteRegistrationComponent,
    title: "Registration"
  },
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent,
  //   children: [
  //     { path: '', component: DashboardComponent, pathMatch: 'full'},
  //     { path: 'history', component: HistoryComponent, pathMatch: 'full'},
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
