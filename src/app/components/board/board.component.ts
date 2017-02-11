import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {MdDialog} from "@angular/material";
import {ListDialogComponent} from "./list-dialog/list-dialog.component";

@Component({
  selector: 'board',
  templateUrl: './board.html',
  styleUrls: ['./board.scss']
})
export class BoardComponent {
  boardId: string;
  name: string;
  lists: FirebaseListObservable<any>;

  boardSubscriber: any;

  constructor(private route: ActivatedRoute, private af: AngularFire, public dialog: MdDialog) {
    this.route.params.subscribe((params) => {
      this.boardId = params['id'];
      this.boardSubscriber && this.boardSubscriber.unsubscribe();
      this.boardSubscriber = af.database.object('boards/' + this.boardId).subscribe((snapshot) => {
        this.name = snapshot.name;
      });
      this.lists = af.database.list('boards/' + this.boardId + '/lists');
    });
  }

  addList() {
    let dialogRef = this.dialog.open(ListDialogComponent);
    dialogRef.afterClosed().subscribe((listName) => {
      if (listName) {
        this.lists.push({name: listName});
      }
    });
  }
}
