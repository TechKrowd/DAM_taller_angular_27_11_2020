import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/model/loginForm';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public data: LoginForm;
  
  constructor(
    private loginService: LoginService
  ) {
    this.data = new LoginForm();
   }

  ngOnInit(): void {
    this.data = this.loginService.data;
  }

}
