import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { TestService } from "../../../../services/test.service";
@Component({
  selector: 'app-showtest',
  templateUrl: './showtest.component.html',
  styleUrls: ['./showtest.component.scss']
})
export class ShowtestComponent implements OnInit {
  examPage:any;
  exame:any
  constructor(private activatedRoute: ActivatedRoute, private testService:TestService, private  router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params)=>{
      this.examPage = params['id'];
      console.log(this.examPage);
      this.getExamData(this.examPage)
    })
  }
  getExamData(id:any){
    this.testService.ExamData(id).subscribe((data:any)=>{
      console.log(data,'exam data');
      this.exame  = data[0]

    })
  }


    onUpdate(id: string){
      this.router.navigate(['../../edit', id], { relativeTo: this.activatedRoute })
    }

    onDelete(id: string){
      this.testService.deleteExame(id).subscribe(data=>{
        console.log('users has been delete');
        this.router.navigate(['../../list'], { relativeTo: this.activatedRoute }).then(() => {
     window.location.reload();
   });
      })
    }

}
