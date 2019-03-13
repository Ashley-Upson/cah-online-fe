import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  token: string = '';
  email: string = '';
  password: string = '';
  repeat_password: string = '';

  constructor() { }

  ngOnInit() {
  }

  reset() {

  }
}
