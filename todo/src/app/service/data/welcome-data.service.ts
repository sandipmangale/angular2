import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
export class HelloWorldBean{
  constructor(public message:string){}
}
@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {

  constructor(private http:HttpClient ) { }
  executeHelloWordBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');

  }

  executeHelloWordBeanServiceWithPathVariable(name){
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);

  }
}
