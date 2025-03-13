import { Component, Inject, inject, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { DUMMY_TASKS } from '../../dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';
import { ITasksService, ITasksServiceP_Token, TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  providers: [
    { provide:  ITasksServiceP_Token, useClass: TasksService } 
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId?: string
  @Input({required: true}) name?: string

  isAddingTask = false

  constructor(@Inject(ITasksServiceP_Token) private tasksService: ITasksService) {}

  get onSelectedTasks() {
    return this.tasksService.getTasksByUser(this.userId)
  }

  onCompleteTask(id: string) {
    this.tasksService.removeTask(id)
  }

  onStartAddTask() {
    this.isAddingTask = true
  }

  onCancelAddTask() {
    this.isAddingTask = false
  }

  onAddTask(taskData: NewTaskData) {
    if (this.userId) {
      this.tasksService.addTask(taskData, this.userId);
    }
    
    this.isAddingTask = false
  }
}
