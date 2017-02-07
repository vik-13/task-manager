import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {MdDialog} from "@angular/material";
import {RemoveModalComponent} from "../../shared/remove-modal/remove-modal.component";

@Component({
  selector: 'board',
  templateUrl: './board.html',
  styleUrls: ['./board.scss']
})
export class BoardComponent {
  name: string;
  lists: FirebaseListObservable<any>;

  boardSubscriber: any;

  constructor(private route: ActivatedRoute, private af: AngularFire, public dialog: MdDialog) {
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

  removeList(key, name) {
  let dialogRef = this.dialog.open(RemoveModalComponent);
    dialogRef.componentInstance.name = name;
    dialogRef.afterClosed().subscribe((confirm) => {
      confirm && this.lists.remove(key);
    });
  }
}
