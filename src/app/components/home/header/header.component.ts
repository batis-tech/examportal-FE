import { Component, OnInit } from '@angular/core';
import { TestService } from "../../../services/test.service";
import { AngularTokenService } from 'angular-token';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  username:any;

  constructor(private  testService:TestService ,public tokenService:AngularTokenService) { }

  ngOnInit(): void {


  }
  signOut(){
    this.testService.signOut()
  }



}
