import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from '../dummy-user';
import { TasksComponent } from "./tasks/tasks.component";
import { RouterTestingHarness } from '@angular/router/testing';

@Component({
  selector: 'app-root',
  standalone: true, // Unnecessary in Angular 18+
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS

  selectedUserId = "u1"

  get selectUser() {
    return this.users.find((user) => user.id = this.selectedUserId)
  }

  onSelectUser(id: string) {
    this.selectedUserId = id
  }
}
