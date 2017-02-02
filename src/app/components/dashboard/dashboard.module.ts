import {DashboardComponent} from "./dashboard.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {MdButtonModule, MdIconModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    MdButtonModule,
    MdIconModule
  ],
  declarations: [
    DashboardComponent
  ]
})

export class DashboardModule {}
