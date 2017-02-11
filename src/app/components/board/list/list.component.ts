import {Component, Input} from "@angular/core";
import {FirebaseObjectObservable, AngularFire, FirebaseListObservable} from "angularfire2";
import {RemoveModalComponent} from "../../../shared/remove-modal/remove-modal.component";
import {MdDialog} from "@angular/material";
import {ListDialogComponent} from "../list-dialog/list-dialog.component";

@Component({
  selector: 'list',
  templateUrl: './list.html',
  styleUrls: ['./list.scss']
})
export class ListComponent {
  @Input() list: any;
  @Input() boardId: string;

  listRef: FirebaseObjectObservable<any>;
  tasksRef: FirebaseListObservable<any>;

  constructor(private af: AngularFire, private dialog: MdDialog) {}

  edit() {
    let dialogRef = this.dialog.open(ListDialogComponent);
    dialogRef.componentInstance.name = this.list.name;
    dialogRef.afterClosed().subscribe((listName) => {
      if (listName) {
        this.listRef.update({name: listName});
      }
    });
  }

  remove() {
    let dialogRef = this.dialog.open(RemoveModalComponent);
    dialogRef.componentInstance.name = this.list.name;
    dialogRef.afterClosed().subscribe((confirm) => {
      confirm && this.listRef.remove();
    });
  }

  ngOnChanges() {
    this.listRef = this.af.database.object('boards/' + this.boardId + '/lists/' + this.list.$key);
    this.tasksRef = this.af.database.list('boards/' + this.boardId + '/lists/' + this.list.$key + '/tasks');
  }
}
