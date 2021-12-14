import { Component, OnInit } from '@angular/core';
import { TestService } from "../../../../services/test.service";
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListtestComponent implements OnInit {
  test:any;
  Question:any;
  constructor(private testService:TestService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  this.getList()
  }

  getList(){
    this.testService.listTest().subscribe(data=>{
      this.test = data;
      console.log(data,'allis');
        this.test.forEach((value:any, index:any, array:any)=>{
        console.log(this.test[index].id);
      })
    })
  }

  onShow(id: string){
    this.router.navigate(['../show', id], { relativeTo: this.activatedRoute });
  }

  onUpdate(id: string){
    this.router.navigate(['../edit', id], { relativeTo: this.activatedRoute })
  }

  onDelete(id: string){
    this.testService.deleteExame(id).subscribe(data=>{
      console.log('users has been delete');
      this.router.navigate(['../list'], { relativeTo: this.activatedRoute }).then(() => {
   window.location.reload();
 });
    })
  }

}
