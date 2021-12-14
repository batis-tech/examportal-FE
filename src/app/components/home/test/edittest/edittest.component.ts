import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators, FormBuilder,FormArray} from '@angular/forms';
import { TestService } from "../../../../services/test.service";
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-edittest',
  templateUrl: './edittest.component.html',
  styleUrls: ['./edittest.component.scss']
})
export class EdittestComponent implements OnInit {
  exame:any=FormGroup;
  option:any[]=[];
  data:any;

   constructor(private testService:TestService,private router:Router,private activatedRoute:ActivatedRoute) {}

   ngOnInit(): void  {
     this.exame = new FormGroup({
       surveyName: new FormControl(''),
       logoUrl: new FormControl(''),
       headerUrl: new FormControl(''),
       headerColor: new FormControl(''),
       footerUrl: new FormControl(''),
       footerColor: new FormControl(''),
       sections: new FormArray([
         this.initSection(),
       ]),
     });

   }




   initSection() {
     return new FormGroup({
       sectionTitle: new FormControl(''),
       sectionDescription: new FormControl(''),
       questions: new FormArray([
         this.initQuestion()
         ])
     });
   }
   initQuestion() {
     return new FormGroup({
       questionTitle: new FormControl(''),
        questionDetail: new FormControl(''),
       options: new FormArray([
         this.initOptions()
       ])
     });
   }

   initOptions() {
     return new FormGroup({
       optionTitle: new FormControl(''),
       optionCorrect:new FormControl('')
     });
   }

   addSection() {
     const control = <FormArray>this.exame.get('sections');
     control.push(this.initSection());
   }

   addQuestion(j:any) {
     console.log(j);
     const control = <FormArray>this.exame.get('sections').controls[j].get('questions');
    // console.log(control);
     control.push(this.initQuestion());

   }

   add(i:any,j:any) {
     //console.log(k);
     const control = <FormArray>this.exame.get('sections').controls[i].get('questions').controls[j].get('options');

   // const control = <FormArray>this.survey.get(['sections',0,'questions',k,'options']); // also try this new syntax
     //console.log(control);
     control.push(this.initOptions());
   }

   getSections(form:any) {
     //console.log(form.get('sections').controls);
     return form.controls.sections.controls ;
   }
   getQuestions(form:any) {
    //console.log(form.controls.questions.controls);
     return form.controls.questions.controls;
   }

   getOptions(form:any) {
     //console.log(form.get('options').controls);
     return form.controls.options.controls;
   }

   removeQuestion(j:any){
      const control = <FormArray>this.exame.get('sections').controls[j].get('questions');
      control.removeAt(j);
   }

   removeSection(i:any){
    const control = <FormArray>this.exame.get('sections');
    control.removeAt(i);
   }

   removeOption(i:any,j:any,k:any){
     console.log(i,j,k);
    const control = <FormArray>this.exame.get(['sections',i,'questions',j,'options']); // also try this new syntax
    control.removeAt(k);
   }

   remove(i:any,j:any){
     const control =  <FormArray>this.exame.get(['sections',i,'questions',j,'options']);
     control.removeAt(0);
     control.controls = [];
   }

   onSubmit(exame:any){

   this.exame.value.sections[0].questions.forEach((value:any, index:any, array:any)=>{
     console.log(value,'value');
     console.log(index,'index');
     console.log(array,'array');
     console.log(exame.value.sections[0].questions[index].options,'after makkdfjn');
    this.option = exame.value.sections[0].questions[index].options
} ,
);
this.activatedRoute.params.subscribe((params:Params)=>{
  this.data = params['id'];
})
   console.log(exame.value.sections[0].sectionTitle,exame.value.sections[0].sectionTitle,exame.value.sections[0].questions,this.option,'final result');
   this.testService.editExam(exame.value.sections[0].sectionTitle,exame.value.sections[0].sectionTitle,exame.value.sections[0].questions,this.option,this.data)
   this.router.navigate(['../../list'], { relativeTo: this.activatedRoute }).then(() => {
window.location.reload();
});
  }

}
