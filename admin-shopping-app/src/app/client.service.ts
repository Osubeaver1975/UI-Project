import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from './client';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseUrl:string ="http://localhost:3000/clients"
  constructor(public http:HttpClient) { } //Dependency Injector for Client Service

  loadAllClientInformation(): Observable<Client[]>{
    return this.http.get<Client[]>(this.baseUrl);
  }

  //using Post method we can store data in Json file with Post method!!
  //1st param url
  //2nd param is object in json format
  storeClientDetails(client:any):any{
    return this.http.post(this.baseUrl,client);
  }
  
} 
