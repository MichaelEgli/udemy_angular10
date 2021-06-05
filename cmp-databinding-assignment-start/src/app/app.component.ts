import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counterOnParent: number;

  onIntervalFired(counter: number) {
    this.counterOnParent = counter;
    console.log('counter on parent', counter)
  }
}
