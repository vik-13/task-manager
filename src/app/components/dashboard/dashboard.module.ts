import {DashboardComponent} from "./dashboard.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {MdButtonModule, MdIconModule, MdDialogModule, MdInputModule} from "@angular/material";
import {AddBoardDialogComponent} from "./add-board-dialog/add-board-dialog.component";
import {FormsModule} from "@angular/forms";
import {RemoveBoardDialogComponent} from "./remove-board-dialog/remove-board-dialog.component";

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
    AddBoardDialogComponent,
    RemoveBoardDialogComponent
  ],
  entryComponents: [
    AddBoardDialogComponent,
    RemoveBoardDialogComponent
  ]
})

export class DashboardModule {}
