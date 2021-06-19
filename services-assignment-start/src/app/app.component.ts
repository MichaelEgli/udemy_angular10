import { Component, OnInit, Output } from '@angular/core';
import { CounterService } from './counter.service';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService, CounterService]
})
export class AppComponent implements OnInit {
  activeUsers: {name: string}[] = [];
  inactiveUsers: {name: string}[] = [];
  counter: number;
  @Output() id: number;

  constructor(private usersService: UsersService, private counterService: CounterService) {}

  ngOnInit(){
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
    this.counter = this.counterService.counter;
  }
}
