import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './components/home/test/test.component';
import { AccountsComponent } from './components/home/accounts/accounts.component';
import { AngularTokenService } from 'angular-token';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CreateAccountComponent } from './components/home/accounts/create-account/create-account.component';
import { ListComponent } from './components/home/accounts/list/list.component';
import { ProfileComponent } from './components/home/accounts/profile/profile.component';
import { EditComponent } from './components/home/accounts/edit/edit.component';
import { AddComponent } from './components/home/test/add/add.component';
import { ListtestComponent } from './components/home/test/list/list.component';
import { ShowtestComponent } from './components/home/test/showtest/showtest.component';
import { EdittestComponent } from './components/home/test/edittest/edittest.component';

const routes: Routes = [
  {path:'home',component:HomeComponent,canActivate: [AngularTokenService],children:[
    { path: '', redirectTo: 'tests', pathMatch: 'full' },
    {path:'users',component:AccountsComponent,children:[
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {path:'list',component:ListComponent},
      {path:'add',component:CreateAccountComponent},
      {path:'profile/:id',component:ProfileComponent},
      {path:'edit/:id',component:EditComponent},
    ]},
    {path:'tests',component:TestComponent,children:[
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {path:'list',component:ListtestComponent},
      {path:'add',component:AddComponent},
      {path:'show/:id',component:ShowtestComponent},
      {path:'edit/:id',component:EdittestComponent},
    ]
  },
    ]},
    {path:'login',component:LoginComponent},
    {path:'',redirectTo:'login',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
