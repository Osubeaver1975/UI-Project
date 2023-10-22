import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientComponent } from './client/client.component';
import { MeetingsComponent } from './meetings/meetings.component';

const routes: Routes = [
  {path:"",component:LoginComponent},

  {path:"home",component:DashboardComponent,children:[
    {path:"client",component:ClientComponent},
    {path:"meetings",component:MeetingsComponent}
  ]},
  
  
  

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
