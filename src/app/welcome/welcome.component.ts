import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
name=''
welcomeMessageFromService:string;
  constructor(private route: ActivatedRoute,private service :WelcomeDataService) { }

  ngOnInit() {
    // console.log(this.route.snapshot.params['name'])
    this.name=this.route.snapshot.params['name']
  }

  getWelcomeMessage(){
    console.log("Entry")
      this.service.executeHelloWordBeanService().subscribe(
        response=>this.handleSuccesfulResponse(response),
        error=>this.handleErrorResponse(error)

      );
      console.log("last line of method")
  }


  getWelcomeMessageWithPathVariable(){
    console.log("Entry")
    //this.name='shivansh'
      this.service.executeHelloWordBeanServiceWithPathVariable(this.name).subscribe(
        response=>this.handleSuccesfulResponse(response),
        error=>this.handleErrorResponse(error)

      );
      console.log("last line of method")
  }
  handleSuccesfulResponse(response){
    this.welcomeMessageFromService=response.message;
  }

  handleErrorResponse(error){
    console.log(error);
    this.welcomeMessageFromService=error.error.message;
  }


}
