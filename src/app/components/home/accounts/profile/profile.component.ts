import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { TestService } from "../../../../services/test.service";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userProfile:any;
  user:any;
  constructor(private activatedRoute: ActivatedRoute, private testService:TestService, private  router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params)=>{
      this.userProfile = params['id'];
      console.log(this.userProfile);
      this.getUserData(this.userProfile)
    })
  }

    getUserData(id: string){
      this.testService.userData(id).subscribe(data=>{
        this.user = data;
        console.log(data);
      })
    }

    onUpdate(id: string){
      this.router.navigate(['../../edit', id], { relativeTo: this.activatedRoute });
    }

    onDelete(id: string){
      this.testService.deleteUser(id).subscribe(data=>{
        console.log('users has been delete');
      })
    }

}
