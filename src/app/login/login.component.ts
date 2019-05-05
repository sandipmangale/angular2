import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username=''
  password=''
  errorMessage='Invalid credenetials'
  inValidCredentials=false
  constructor(private router : Router,private authenticationService : HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(){
   if(this.authenticationService.authenticate(this.username,this.password)){
     this.router.navigate(['welcome',this.username])
     this.inValidCredentials=false
   }else{
    this.inValidCredentials=true
   }
  }

}
