import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  isValid: boolean;
  states = ['Stable', 'Critical', 'Finished'];
  forbiddenProjectNames = ['Test'];

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectData': new FormGroup( {
        'projectname': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'status': new FormControl(null)
      }),
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);  
    this.projectForm.reset();
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

}
