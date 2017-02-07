import {DashboardComponent} from "./dashboard.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {MdButtonModule, MdIconModule, MdDialogModule, MdInputModule} from "@angular/material";
import {BoardDialogComponent} from "./board-dialog/board-dialog.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,

    MdDialogModule,
    MdButtonModule,
    MdIconModule,
    MdInputModule
  ],
  declarations: [
    DashboardComponent,
    BoardDialogComponent
  ],
  entryComponents: [
    BoardDialogComponent
  ]
})

export class DashboardModule {}
