import { Component,OnInit } from '@angular/core';
import { MeetingsService } from '../meetings.service';
import { Meetings } from '../meetings';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit{

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