import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  counter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStart() {
    this.counter++
    console.log('start clicked, counter', this.counter);
  }

  onStop() {
    this.counter = 0;
    console.log('stop clicked, counter', this.counter);
  }

}
