import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators, FormBuilder} from '@angular/forms';
import { MustMatch } from './confirmed.validator';
import { TestService } from "../../../../services/test.service";
import { Router, ActivatedRoute,Params } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

       user:any = FormGroup;
       userProfile:any;
       userdata:any
      constructor(private formBuilder: FormBuilder,private testService:TestService, private router :Router ,private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
      this.activatedRoute.params.subscribe((params:Params)=>{
        this.userProfile = params['id'];
        console.log(this.userProfile);
        this.getUserData(this.userProfile)
      })
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
    getUserData(id: string){
      this.testService.userData(id).subscribe(data=>{
        this.userdata = data;
        console.log(data);
      })
    }
    onSubmit(){
      this.testService.Edit(this.user.value.name,this.user.value.email,this.user.value.password,this.user.value.repassword,this.user.value.userType)
      console.log(this.user.value)
      this.router.navigate(['../../list'], { relativeTo: this.activatedRoute }).then(() => {
   window.location.reload();
   });
    }
}
