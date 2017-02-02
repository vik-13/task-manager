import {Component} from "@angular/core";
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {MdDialog} from "@angular/material";
import {BoardDialogComponent} from "./board-dialog/board-dialog.component";
import {RemoveBoardDialogComponent} from "./remove-board-dialog/remove-board-dialog.component";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})

export class DashboardComponent {
  boards: FirebaseListObservable<any>;

  constructor(private af: AngularFire, public dialog: MdDialog) {
    this.boards = af.database.list('/boards');
  }

  add() {
    let dialogRef = this.dialog.open(BoardDialogComponent);
    dialogRef.afterClosed().subscribe((boardName) => {
      if (boardName) {
        this.boards.push({name: boardName});
      }
    });
  }

  edit(event, key, name) {
    event.stopPropagation();
    let dialogRef = this.dialog.open(BoardDialogComponent);
    dialogRef.componentInstance.name = name;
    dialogRef.afterClosed().subscribe((boardName) => {
      if (boardName) {
        this.boards.update(key, {name: boardName});
      }
    });
  }

  remove(event, key, name) {
    event.stopPropagation();
    let dialogRef = this.dialog.open(RemoveBoardDialogComponent);
    dialogRef.componentInstance.name = name;
    dialogRef.afterClosed().subscribe((confirm) => {
      if (confirm) {
        this.boards.remove(key);
      }
    });
  }

}
