import {Component, Input} from "@angular/core";
import {AngularFire, FirebaseListObservable} from "angularfire2";

@Component({
  selector: 'add-task',
  templateUrl: './add-task.html',
  styleUrls: ['../task/task.scss']
})
export class AddTaskComponent {
  @Input() boardId: string;
  @Input() list: any;

  editMode: boolean = false;

  tasksRef: FirebaseListObservable<any>;

  constructor(private af: AngularFire) {}

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
      this.tasksRef.push({sortKey: (new Date()).getTime(), message: textarea.value});
      this.editMode = false;
    }
  }

  ngOnChanges() {
    this.tasksRef = this.af.database.list('boards/' + this.boardId + '/lists/' + this.list.$key + '/tasks');
  }
}
