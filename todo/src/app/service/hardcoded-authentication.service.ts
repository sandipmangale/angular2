import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username,password){
    // console.log('Before -> '+this.isUserLoggedIn());
    if(username==='sandip' && password==='test'){
      sessionStorage.setItem('authenticatedUser',username);
      // console.log('After -> '+this.isUserLoggedIn());
      return true
    }
    return false

  }
  isUserLoggedIn(){
    let username=sessionStorage.getItem('authenticatedUser');
    return !(username===null)
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}
