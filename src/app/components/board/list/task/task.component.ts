import {Component, Input} from "@angular/core";
import {AngularFire, FirebaseObjectObservable} from "angularfire2";
import {RemoveModalComponent} from "../../../../shared/remove-modal/remove-modal.component";
import {MdDialog} from "@angular/material";

@Component({
  selector: 'task',
  templateUrl: './task.html',
  styleUrls: ['./task.scss']
})
export class TaskComponent {
  @Input() boardId: any;
  @Input() listId: any;
  @Input() task: any;

  editMode: boolean = false;

  taskRef: FirebaseObjectObservable<any>;

  constructor(private af: AngularFire, private dialog: MdDialog) {}

  toEditMode() {
    this.editMode = true;
  }

  keyUp(event) {
    if (event.keyCode == 27) {
      this.editMode = false;
    }
  }

  keyPress(event, textarea) {
    if (event.keyCode == 13 && textarea.value) {
      this.taskRef.update({name: textarea.value});
      this.editMode = false;
    }
  }

  remove() {
    let dialogRef = this.dialog.open(RemoveModalComponent);
    dialogRef.componentInstance.name = 'task';
    dialogRef.afterClosed().subscribe((confirm) => {
      confirm && this.taskRef.remove();
    });
  }

  ngOnChanges() {
    this.taskRef = this.af.database.object('boards/' + this.boardId + '/lists/' + this.listId + '/tasks/' + this.task.$key);
  }
}
