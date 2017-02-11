import {NgModule} from "@angular/core";
import {BoardComponent} from "./board.component";
import {CommonModule} from "@angular/common";
import {ListComponent} from "./list/list.component";
import {MdListModule, MdButtonModule, MdIconModule, MdDialogModule, MdInputModule} from "@angular/material";
import {ListDialogComponent} from "./list-dialog/list-dialog.component";
import {FormsModule} from "@angular/forms";
import {TaskComponent} from "./list/task/task.component";
import {AddTaskComponent} from "./list/add-task/add-task.component";
import {DragulaModule} from "ng2-dragula";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DragulaModule,

    MdListModule,
    MdButtonModule,
    MdIconModule,
    MdDialogModule,
    MdInputModule
  ],
  declarations: [
    BoardComponent,
    ListComponent,
    TaskComponent,
    AddTaskComponent,
    ListDialogComponent
  ],
  entryComponents: [
    ListDialogComponent
  ]
})
export class BoardModule {}
