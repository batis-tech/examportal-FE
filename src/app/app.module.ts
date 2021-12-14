import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './components/home/test/test.component';
import { AccountsComponent } from './components/home/accounts/accounts.component';
import { AngularTokenModule } from 'angular-token';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './components/home/header/header.component';
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
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AccountsComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    CreateAccountComponent,
    ListComponent,
    ProfileComponent,
    EditComponent,
    AddComponent,
    ListtestComponent,
    ShowtestComponent,
    EdittestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularTokenModule.forRoot({
    apiBase: 'http://localhost:3000',
  }),
  FormsModule,
  ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
