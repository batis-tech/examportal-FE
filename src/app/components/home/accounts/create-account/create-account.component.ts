import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators, FormBuilder} from '@angular/forms';
import { MustMatch } from './confirmed.validator';
import { TestService } from "../../../../services/test.service";
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

     user:any = FormGroup;
    constructor(private formBuilder: FormBuilder,private testService:TestService, private router :Router ,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = this.formBuilder.group({
        name: new FormControl(null,[Validators.required, Validators.email]),
        email: new FormControl(null,[Validators.required, Validators.email]),
        password: new FormControl('',[Validators.required,Validators.minLength(6)]),
        repassword: new FormControl('',Validators.required),
        userType: new FormControl('',Validators.required),
  },{
    validator: MustMatch('password', 'repassword')}
  );
  }

  get f(){
    return this.user.controls;
  }

  onSubmit(){
    this.testService.Register(this.user.value.name,this.user.value.email,this.user.value.password,this.user.value.repassword,this.user.value.userType)
    console.log(this.user.value)
    this.router.navigate(['../list'], { relativeTo: this.route }).then(() => {
 window.location.reload();
 });
  }

}
