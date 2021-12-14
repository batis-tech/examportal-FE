import { Component, OnInit } from '@angular/core';
import { TestService } from "../../../../services/test.service";
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  user:any;
  dropDownList:any;
  constructor(private testService:TestService, private router :Router ,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  this.getUserList()
  }
  getUserList(){
    this.testService.userList().subscribe(data =>{
      this.user = data
      console.log(data);
    })
  }

  onShow(id: string){
    this.router.navigate(['../profile', id], { relativeTo: this.activatedRoute });
  }

  onUpdate(id: string){
    this.router.navigate(['../edit', id], { relativeTo: this.activatedRoute });
  }

  onDelete(id: string){
    this.testService.deleteUser(id).subscribe(data=>{
      console.log('users has been delete');
      this.router.navigate(['../list'], { relativeTo: this.activatedRoute }).then(() => {
        window.location.reload();
      });
    })
  }

}
