import {Component} from "@angular/core";
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'board-dialog',
  templateUrl: './board-dialog.html',
  styleUrls: ['./board-dialog.scss']
})
export class BoardDialogComponent {
  name: string = '';

  constructor(public dialogRef: MdDialogRef<BoardDialogComponent>) {}

  save(field) {
    this.dialogRef.close(field.value.name);
  }
}
