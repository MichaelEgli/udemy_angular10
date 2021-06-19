import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() user: string[];
  @Input() id: number;
  @Output() userSetToActive = new EventEmitter<number>();

  constructor(private usersService: UsersService) {}

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
    this.usersService.userSetToActive.emit(id);
  }
}
