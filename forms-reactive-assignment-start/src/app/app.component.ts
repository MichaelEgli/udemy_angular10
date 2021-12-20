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

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectData': new FormGroup( {
        'projectname': new FormControl(),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
    });
  }

  onSubmit() {
    console.log(this.projectForm);  
    this.projectForm.reset();
  }
}
