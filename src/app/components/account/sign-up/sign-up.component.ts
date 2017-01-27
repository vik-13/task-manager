import {Component} from "@angular/core";
import {AngularFire} from "angularfire2";

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.html'
})

export class SignUpComponent {

  constructor(private af: AngularFire) {}

  signUp(form) {
    this.af.auth.createUser(form.value).catch((response) => {
      console.log(response.message);
    })
  }
}
