import {Component} from "@angular/core";
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {MdDialog} from "@angular/material";
import {AddBoardDialogComponent} from "./add-board-dialog/add-board-dialog.component";
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

  addBoard() {
    let dialogRef = this.dialog.open(AddBoardDialogComponent);
    dialogRef.afterClosed().subscribe((boardName) => {
      if (boardName) {
        this.boards.push({name: boardName});
      }
    });
  }

  remove(event, key) {
    event.stopPropagation();
    let dialogRef = this.dialog.open(RemoveBoardDialogComponent);
    dialogRef.afterClosed().subscribe((confirm) => {
      if (confirm) {
        this.boards.remove(key);
      }
    });
  }

}
