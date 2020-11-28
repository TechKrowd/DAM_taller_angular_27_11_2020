import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginForm } from 'src/app/model/loginForm';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginModel: LoginForm;
  public msg: string;
  public ok: boolean;

  constructor(
    private loginService:LoginService,
    private router: Router
  ) {
    this.loginModel = new LoginForm();
    this.msg="";
    this.ok=true;
  }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm):void{
    console.log("NgForm:");
    console.log(JSON.stringify(f.value.username));
    console.log("LoginModel");
    console.log(JSON.stringify(this.loginModel));
    if (this.loginModel.username ===""){
      this.ok=false;
      this.msg="El email es obligatorio";
    }else{
      this.loginService.sendLogin(this.loginModel);
      this.router.navigate(["home"]);
    }
    
  }

}
