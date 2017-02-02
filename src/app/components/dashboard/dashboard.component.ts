import {Component} from "@angular/core";
import {AngularFire, FirebaseListObservable} from "angularfire2";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})

export class DashboardComponent {
  boards: FirebaseListObservable<any>;

  constructor(private af: AngularFire) {
    this.boards = af.database.list('/boards');
  }

  addBoard() {
    this.boards.push({name: 'My first board'});
  }

  remove(key) {
    this.boards.remove(key);
  }

}
