import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = "mariem";
  password = "mariouma123";
  errorMessage = "Invalid credentials";
  invalidLogin = false;

  constructor() {
    
  }

  login() {
    if (this.username === "mariem" && this.password ==="mariouma123") {
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}
