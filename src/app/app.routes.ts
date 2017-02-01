import {Routes} from "@angular/router";
import {SignInComponent} from "./components/account/sign-in/sign-in.component";
import {SignUpComponent} from "./components/account/sign-up/sign-up.component";
import {AuthZoneComponent} from "./zones/auth-zone/auth-zone.component";
import {InternalZoneComponent} from "./zones/internal-zone/internal-zone.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {InternalZoneActivateService} from "./zones/internal-zone/internal-zone.activate.service";
import {AuthZoneActivateService} from "./zones/auth-zone/auth-zone.activate.service";
import {BoardComponent} from "./components/board/board.component";

export const appRoutes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {
    path: '',
    component: AuthZoneComponent,
    canActivate: [AuthZoneActivateService],
    children: [
      {path: 'sign-in', component: SignInComponent},
      {path: 'sign-up', component: SignUpComponent},
    ]
  },
  {
    path: '',
    component: InternalZoneComponent,
    canActivate: [InternalZoneActivateService],
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'board/:id', component: BoardComponent}
    ]
  },
  {path: '**', redirectTo:'/dashboard'}
];
