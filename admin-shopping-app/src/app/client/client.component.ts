import { Component,OnInit } from "@angular/core";
import { ClientService } from "../client.service";
import { Client } from "../client";
import { FormGroup,FormControl } from "@angular/forms";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit{

  clientRef = new FormGroup({
    clientName:new FormControl(),
    clientDescription:new FormControl(),
    clienImagetUrl: new FormControl()
  })
  clients:Array<Client>=[];
  constructor(public clientService:ClientService){} //Dependency Injector for ClientService

//this code executes only one time, when component gets created...
ngOnInit(): void {
  this.clientService.loadAllClientInformation().subscribe({
    next:(result:any)=> {
      this.clients=result;
    },
    error:(error:any)=> {
      console.log(error)
    },
    complete:()=> {
      console.log("Done!")
    }
  })
  

}
}  
