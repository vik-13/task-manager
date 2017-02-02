import {Component} from "@angular/core";
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'add-board-dialog',
  templateUrl: './add-board-dialog.html',
  styleUrls: ['./add-board-dialog.scss']
})
export class AddBoardDialogComponent {
  constructor(public dialogRef: MdDialogRef<AddBoardDialogComponent>) {}

  add(field) {
    this.dialogRef.close(field.value.name);
  }
}
