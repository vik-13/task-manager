import {Component} from "@angular/core";
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'remove-board-dialog',
  templateUrl: './remove-board-dialog.html',
  styleUrls: ['./remove-board-dialog.scss']
})
export class RemoveBoardDialogComponent {
  name: string;

  constructor(public dialogRef: MdDialogRef<RemoveBoardDialogComponent>) {}

  remove() {
    this.dialogRef.close(true);
  }
}
