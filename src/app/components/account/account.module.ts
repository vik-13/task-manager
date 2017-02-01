import {NgModule} from "@angular/core";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {FormsModule} from "@angular/forms";
import {MdCardModule, MdButtonModule, MdInputModule} from "@angular/material";

@NgModule({
  imports: [
    FormsModule,

    MdCardModule,
    MdButtonModule,
    MdInputModule
  ],
  declarations: [
    SignInComponent,
    SignUpComponent
  ]
})

export class AccountModule {}
