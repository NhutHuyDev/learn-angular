import { Component, EventEmitter, Input, Output} from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  imports: [CardComponent],
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
