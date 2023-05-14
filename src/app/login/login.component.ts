import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewsapiservicesService } from '../service/newsapiservices.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router,private ds:NewsapiservicesService,private fb:FormBuilder){}

  loginForm=this.fb.group({
    uname:[''],
    psw:['']
  })

  login(){
    var uname=this.loginForm.value.uname
    var psw=this.loginForm.value.psw
    if(this.loginForm){
      this.ds.login(uname,psw).subscribe((result:any)=>{
        localStorage.setItem("currentUser",result.currentUser)
        localStorage.setItem("token",JSON.stringify(result.token))

        alert(result.message)
        this.router.navigateByUrl('')
      },
      result=>{
        alert(result.error.message)
      
      })

    }
    else{
      alert("invalid form")
    }
}

}
