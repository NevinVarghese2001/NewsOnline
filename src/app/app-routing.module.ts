import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadingComponent } from './topheading/topheading.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {path:'',component:TopheadingComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'profile',component:ProfileComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
