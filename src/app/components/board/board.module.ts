import {NgModule} from "@angular/core";
import {BoardComponent} from "./board.component";
import {CommonModule} from "@angular/common";
import {ListComponent} from "./list/list.component";
import {MdListModule, MdButtonModule, MdIconModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,

    MdListModule,
    MdButtonModule,
    MdIconModule
  ],
  declarations: [
    BoardComponent,
    ListComponent
  ]
})
export class BoardModule {}
