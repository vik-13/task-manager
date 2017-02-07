import {Component} from "@angular/core";
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'remove-modal',
  templateUrl: './remove-modal.html',
  styleUrls: ['./remove-modal.scss']
})
export class RemoveModalComponent {
  name: string;

  constructor(public dialogRef: MdDialogRef<RemoveModalComponent>) {}

  remove() {
    this.dialogRef.close(true);
  }
}
