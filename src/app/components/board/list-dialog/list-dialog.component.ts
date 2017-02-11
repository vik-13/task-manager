import {Component} from "@angular/core";
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'list-dialog',
  templateUrl: './list-dialog.html',
  styleUrls: ['./list-dialog.scss']
})
export class ListDialogComponent {
  name: string = '';

  constructor(public dialogRef: MdDialogRef<ListDialogComponent>) {}

  save(field) {
    this.dialogRef.close(field.value.name);
  }
}
