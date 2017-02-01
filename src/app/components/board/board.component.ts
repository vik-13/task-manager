import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {FirebaseListObservable, AngularFire} from "angularfire2";

@Component({
  selector: 'board',
  templateUrl: './board.html'
})
export class BoardComponent {
  name: string;
  lists: FirebaseListObservable<any>;

  boardSubscriber: any;

  constructor(private route: ActivatedRoute, private af: AngularFire) {
    this.route.params.subscribe((params) => {
      this.boardSubscriber && this.boardSubscriber.unsubscribe();
      this.boardSubscriber = af.database.object('boards/' + params['id']).subscribe((snapshot) => {
        this.name = snapshot.name;
      });
      this.lists = af.database.list('boards/' + params['id'] + '/lists');
    });
  }

  addList() {
    this.lists.push({
      name: 'Some list'
    });
  }

  removeList(key) {
    this.lists.remove(key);
  }
}
