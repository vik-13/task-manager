import {NgModule} from "@angular/core";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [
    SignInComponent,
    SignUpComponent
  ]
})

export class AccountModule {}
