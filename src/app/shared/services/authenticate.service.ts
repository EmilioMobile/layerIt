import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

  register() {
    console.log('register new user');
  }

  login() {
    console.log('login new user');
  }

  update() {
    console.log('update new user');
  }

  logout() {
    console.log('logout new user');
  }

  delete() {
    console.log('delete new user');
  }
}
