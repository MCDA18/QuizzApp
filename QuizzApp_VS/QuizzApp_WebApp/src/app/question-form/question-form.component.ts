
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../service/shared.service';
@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {

  questionform!: FormGroup;
  constructor(private sharedService:SharedService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.questionform=this.formBuilder.group({
      questionTitle:['',Validators.required],
      questionPoints:['',Validators.required],
      questionDifficulty:['',Validators.required],
      questionItem1:['',Validators.required],
      questionItem2:['',Validators.required],
      questionItem3:['',Validators.required],
      questionItem4:['',Validators.required],
      questionAnswers:['',Validators.required],

    });
  }
  submitQuestion()
  {
    this.sharedService.insertQuestion(this.questionform.value);
  }
 
}
