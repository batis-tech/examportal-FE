import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from "@angular/common/http";
import {  Observable } from 'rxjs';
import { Router } from "@angular/router";
import { AngularTokenService } from 'angular-token';

@Injectable({
  providedIn: 'root'
})

export class TestService {
  message:any;
  constructor(private router :Router, private http :HttpClient,private tokenService: AngularTokenService) { }

    userList():Observable<any>{
    let userList = `http://localhost:3000/users`;
     return this.http.get<any>(userList)
    }
    userData(id:any){
      let userData = `http://localhost:3000/profile/${id}`;
       return this.http.get<any>(userData)
    }
    deleteUser(id:any){
      let deleteUser = `http://localhost:3000/users/${id}`;
       return this.http.get<any>(deleteUser)
       this.router.navigate([this.router.url]);
    }

    listTest():Observable<any>{
    let testList = `http://localhost:3000/tests`;
     return this.http.get<any>(testList)
   }
   deleteExame(id:any){
     let deleteUser = `http://localhost:3000/delete/exam/${id}`;
      return this.http.get<any>(deleteUser)

   }

   signIn(email:any,password:any){
     this.tokenService.signIn({
     login:                email,
     password:             password,

    }).subscribe(
     res =>{
        if (res.body.data.userType == 1) {
          this.signOut()
        }else{
        this.message = 'Teacher  only'
          console.log('Teacher  only');
          this.router.navigate(['home']);
        }
      },
     error =>    console.log(error),
     );
    }

    Register(name:any,email:any,password:any,repassword:any,userType?:any){
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify({name,email,password,repassword,userType});
    console.log(body)
     return this.http.post('http://localhost:3000/auth',body,{'headers':headers}).subscribe(resp => {
         console.log(resp);
         // this.router.navigate(['users']);
       }, error => {
         console.log(error);
       });
    }

    Edit(name:any,email:any,password:any,repassword:any,userType?:any){
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify({name,email,password,repassword,userType});
    console.log(body)
     return this.http.put(`http://localhost:3000/auth`,body,{'headers':headers}).subscribe(resp => {
         console.log(resp);
       }, error => {
         console.log(error);
       });
    }

    addExams(title:any,description:any,questions_attributes:any,options_attributes:any){
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify({title,description,questions_attributes,options_attributes});
    console.log(body)
     return this.http.post('http://localhost:3000/exame/create',body,{'headers':headers}).subscribe(resp => {
         console.log(resp);

       }, error => {
         console.log(error);

       });
    }
    editExam(title:any,description:any,questions_attributes:any,options_attributes:any,id:number){
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify({title,description,questions_attributes,options_attributes});
    console.log(body)
     return this.http.post(`http://localhost:3000/exam/edit/${id}`,body,{'headers':headers}).subscribe(resp => {
         console.log(resp);
       }, error => {
         console.log(error);
       });
    }

    ExamData(id:any){
      let exameList = `http://localhost:3000/exam/show/${id}`;
       return this.http.get<any>(exameList)
    }

    signOut(){
    this.tokenService.signOut().subscribe(
     res =>{
      this.router.navigate(['login']);
        console.log(res)
      },
      error =>    console.log(error)
     );
     }


}
