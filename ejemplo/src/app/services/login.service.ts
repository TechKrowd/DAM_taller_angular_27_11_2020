import { Injectable } from '@angular/core';
import { LoginForm } from '../model/loginForm';

@Injectable()
export class LoginService{
    
    public data: LoginForm;

    constructor(){
        this.data = new LoginForm();
    }

    public sendLogin(data: LoginForm):void{
        console.log("LoginService");
        console.log(JSON.stringify(data));
        this.data = data;
    }
}