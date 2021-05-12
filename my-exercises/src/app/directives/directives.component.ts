import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})

export class DirectivesComponent implements OnInit {
  doDisplay = false;
  log = [];
  count = 0;

  constructor() { }

  ngOnInit(): void {
  }

  saySomething() {
    this.doDisplay = true;
    this.count = this.count + 1;
  }

}
