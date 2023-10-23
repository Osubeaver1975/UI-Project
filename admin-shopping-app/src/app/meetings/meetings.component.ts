import { Component,OnInit } from '@angular/core';
import { MeetingsService } from '../meetings.service';
import { Meetings } from '../meetings';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit{

  meetingRef = new FormGroup({
    clientname: new FormControl(),
    meetingdate: new FormControl(),
    meetingstart: new FormControl(),
    meetingend: new FormControl(),
  })
meetings:Array<Meetings>=[];
  constructor(public meetingService:MeetingsService){} //Dependency Injector for MeetingService

  //this code executes only one time, when component gets created...
ngOnInit(): void {
  this.meetingService.loadAllMeetingInformation().subscribe({
    next:(result:any)=> {
      this.meetings=result;
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