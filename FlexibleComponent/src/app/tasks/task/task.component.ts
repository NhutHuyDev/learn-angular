import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { NewTaskComponent } from '../new-task/new-task.component';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  @Output() complete = new EventEmitter<string>(); 

  onCompletedTask() {
    this.complete.emit(this.task.id)
  }
}
