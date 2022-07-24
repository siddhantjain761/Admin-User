import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateuserComponent } from './createuser/createuser.component';
import { CreateworkitemComponent } from './createworkitem/createworkitem.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { UpdateworkitemComponent } from './updateworkitem/updateworkitem.component';
import { UserWorkitemComponent } from './user-workitem/user-workitem.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'adminlogin', component:AdminloginComponent},
  {path:'admin-dashboard', component:AdmindashboardComponent},
  {path:"create-user", component: CreateuserComponent},
  {path:"user-dashboard", component: UserdashboardComponent},
  {path:'',redirectTo:'/login',pathMatch:"full"},
  {path:"create-workitem", component: CreateworkitemComponent},
  {path:"profile", component: ProfileComponent},
  {path:"update-profile", component: UpdateProfileComponent},
  {path:"update-workitem", component: UpdateworkitemComponent},
  {path:"user-workitem", component: UserWorkitemComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
