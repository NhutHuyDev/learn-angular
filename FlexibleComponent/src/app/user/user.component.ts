import { Component, computed, EventEmitter, Input, Output} from '@angular/core';
import { DUMMY_USERS } from '../../dummy-user';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
    @Input({required: true}) id!: string
    @Input({required: true}) name! : string // Use with signal: @Input({ required: true }) value!: Signal<string> or name = input<string>()
    @Input({required: true}) avatar! : string 
    @Output() select = new EventEmitter() // select = output<string>();
  
    get imagePath () { return 'assets/users/' + this.avatar } 
  
    onSelectUser() {
      this.select.emit(this.id)
    }
}
