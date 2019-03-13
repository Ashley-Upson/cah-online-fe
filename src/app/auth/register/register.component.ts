import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: string = '';
  email: string = '';
  username: string = '';
  password: string = '';
  repeat_password: string = '';

  constructor() { }

  ngOnInit() {
  }

  register() {

  }
}
