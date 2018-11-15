import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {


  title = 'Slice.it';
  action = 'Log in to your account';
  emailAddressText = 'Email Address';
  passwordText = 'Password';
  logInText = 'Log In';
  signUpText = 'Sign Up';
  forgotPasswordText = 'Forgot your password ?';

  model = new User('pere@pons.es', 'xx', 'XX');

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('login button submit');
    console.log(this.model);
  }

}
