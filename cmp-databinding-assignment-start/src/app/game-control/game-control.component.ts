import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  intervalFired = new EventEmitter<number>();
  interval: any;
  lastNumber = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStart() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
      console.log('new value', this.lastNumber);
    }, 1000);
  }

  onStop() {
    clearInterval(this.interval);
    console.log('value at stop', this.lastNumber);
  }


}
