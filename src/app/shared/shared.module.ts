import {NgModule} from "@angular/core";
import {RemoveModalComponent} from "./remove-modal/remove-modal.component";
import {MdButtonModule} from "@angular/material";
import {VuAsyncPipe} from "./async/async.pipe";
import {FocusDirective} from "./focus/focus.directive";

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
