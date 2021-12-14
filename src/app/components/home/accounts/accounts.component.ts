import { Component, OnInit } from '@angular/core';
import { AngularTokenService } from 'angular-token';
import { HttpClient } from "@angular/common/http";
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { TestService } from "../../../services/test.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  dropDownList:any;
  constructor(private http: HttpClient,private test:TestService,private router:Router,public tokenService :AngularTokenService) {

  }

  ngOnInit(): void {

  }



}
