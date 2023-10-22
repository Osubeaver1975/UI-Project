import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meetings } from './meetings';
@Injectable({
  providedIn: 'root'
})
export class MeetingsService {
  baseUrl:string ="http://localhost:3000/meetings"
  constructor(public http:HttpClient) { } //Dependency Injector for Meeting Service

  loadAllMeetingInformation(): Observable<Meetings[]>{
    return this.http.get<Meetings[]>(this.baseUrl);
  }

  //using Post method we can store data in Json file with Post method!!
  //1st param url
  //2nd param is object in json format
  storeMeetingDetails(Meeting:any):any{
    return this.http.post(this.baseUrl,Meeting);
  }

}
