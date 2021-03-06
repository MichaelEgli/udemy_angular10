import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') myForm: NgForm;
  submitted = false;
  user = {
    email: '',
    password: ''
  };
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  selectedSubscription = "Advanced";

  onSubmit(form: NgForm ) {
    console.log(form.value);

    this.submitted = true;
    this.user.email = this.myForm.value.email;
    this.user.password = this.myForm.value.password;
  }

}
