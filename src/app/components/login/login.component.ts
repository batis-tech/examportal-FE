import { Component, OnInit } from '@angular/core';
import { AngularTokenService } from 'angular-token';
import { HttpClient } from "@angular/common/http";
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { TestService } from "../../services/test.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  admin = new FormGroup ({
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
 })
  constructor(private http: HttpClient,private test:TestService,private router:Router,public tokenService :AngularTokenService) {

  }

  ngOnInit(): void {
  }
  onSubmit(){
   this.test.signIn(this.admin.value.email,this.admin.value.password)
  }


}
