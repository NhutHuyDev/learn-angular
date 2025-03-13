import { Injectable, InjectionToken } from "@angular/core";
import { DUMMY_TASKS } from "../../dummy-tasks";
import { NewTaskData, Task } from "./task/task.model";

export interface ITasksService {
    getTasksByUser(userId?: string): Task[]
    addTask(taskData: NewTaskData, userId: string): void
    removeTask(id: string): void
}

export const ITasksServiceP_Token = new InjectionToken<ITasksService>('ITasksService');

@Injectable({providedIn: "root"})
export class TasksService implements ITasksService {
    private static TASK_KEY = "tasks"
    private tasks: Task[] = [];

    constructor() {
        const tasks = localStorage.getItem(TasksService.TASK_KEY)

        if (tasks) {
            this.tasks = JSON.parse(tasks)
        }
    }

    getTasksByUser(userId?: string): Task[] {
        return this.tasks.filter(task => task.userId == userId)
    }

    addTask(taskData: NewTaskData, userId: string): void {
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date
          });
          this.saveTasks();
    }

    removeTask(id: string): void {
        this.tasks.filter(task => task.id != id)
        this.saveTasks()
    }

    private saveTasks () {
        localStorage.setItem(TasksService.TASK_KEY, JSON.stringify(this.tasks))
    }
}