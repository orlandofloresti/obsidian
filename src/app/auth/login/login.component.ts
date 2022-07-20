import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  fg = new FormGroup({
    user: new FormControl(undefined, Validators.required ),
    password: new FormControl(undefined, Validators.required ),
  })

  constructor() { }

  ngOnInit(): void {
  }

  onLogin() {
    
  }

}
