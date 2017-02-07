import {NgModule} from "@angular/core";
import {RemoveModalComponent} from "./remove-modal/remove-modal.component";
import {MdButtonModule} from "@angular/material";

@NgModule({
  imports: [
    MdButtonModule
  ],
  declarations: [
    RemoveModalComponent
  ],
  entryComponents: [
    RemoveModalComponent
  ]
})
export class SharedModule {}
