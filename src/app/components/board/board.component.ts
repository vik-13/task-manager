import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {MdDialog} from "@angular/material";
import {ListDialogComponent} from "./list-dialog/list-dialog.component";
import {DragulaService} from "ng2-dragula";

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

  constructor(private route: ActivatedRoute, private af: AngularFire, public dialog: MdDialog, private dg: DragulaService) {
    this.route.params.subscribe((params) => {
      this.boardId = params['id'];
      this.boardSubscriber && this.boardSubscriber.unsubscribe();
      this.boardSubscriber = af.database.object('boards/' + this.boardId).subscribe((snapshot) => {
        this.name = snapshot.name;
      });
      this.lists = af.database.list('boards/' + this.boardId + '/lists');
    });

    dg.drop.subscribe((value) => {
      let task = {key: value[1].getAttribute('key'), message: value[1].getAttribute('message')},
        next = value[4] && value[4].getAttribute('key') || null,
        from = value[3].getAttribute('key'),
        to = value[2].getAttribute('key');

      this.move(task, next, from, to);
    });
  }

  //TODO: Should be refactored...
  move(task, next, from, to) {
    let fromList, toList, prevSortKey = 0, newSortKey, subscriber, origin;

    fromList = this.af.database.list('boards/' + this.boardId + '/lists/' + from + '/tasks', {
      query: {
        orderByChild: 'sortKey'
      }
    });
    if (from == to) {
      if (!next) {
        fromList.update(task.key, {sortKey: (new Date()).getTime()});
      } else {
        subscriber = fromList.subscribe((snapshots) => {
          snapshots.forEach((snapshot) => {
            if (snapshot.$key == next) {
              newSortKey = (snapshot.sortKey + prevSortKey) / 2;
            }
            prevSortKey = snapshot.sortKey;
          });
          subscriber.unsubscribe();
          fromList.update(task.key, {sortKey: newSortKey});
        });
      }
    } else {
      toList = this.af.database.list('boards/' + this.boardId + '/lists/' + to + '/tasks', {
        query: {
          orderByChild: 'sortKey'
        }
      });

      fromList.remove(task.key);
      if (!next) {
        toList.push({
          sortKey: (new Date()).getTime(),
          message: task.message
        });
      } else {
        subscriber = toList.subscribe((snapshots) => {
          snapshots.forEach((snapshot) => {
            if (snapshot.$key == next) {
              newSortKey = (snapshot.sortKey + prevSortKey) / 2;
            }
            prevSortKey = snapshot.sortKey;
          });
          subscriber.unsubscribe();
          toList.push({
            sortKey: newSortKey,
            message: task.message
          });
        });
      }
    }
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
