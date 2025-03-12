import { Component, computed, EventEmitter, Input, Output} from '@angular/core';
import { DUMMY_USERS } from '../../dummy-user';
import { User } from './user.model';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
    @Input({required: true}) isSelected!: boolean 
    @Input({required: true}) user!: User // Use with signal: @Input({ required: true }) value!: Signal<string> or name = input<string>()
    @Output() select = new EventEmitter() // select = output<string>();
  
    get imagePath () { return 'assets/users/' + this.user.avatar } 
  
    onSelectUser() {
      this.select.emit(this.user.id)
    }
}
