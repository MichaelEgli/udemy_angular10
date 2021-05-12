import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})

export class DirectivesComponent implements OnInit {
  doDisplay = false;
  logs = [];
  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  saySomething() {
    this.doDisplay = true;
    this.counter = this.counter + 1;
    this.logs.push(this.counter);
  }

}
