import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading!:boolean

  doLogin(){
   this.isLoading=true
   setTimeout(()=>{
    this.isLoading=false;
   },2000)
  }

}
