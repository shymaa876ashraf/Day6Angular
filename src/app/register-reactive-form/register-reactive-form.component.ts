import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { confirmPasswordVailadators } from 'src/API/confirmpassward.validator';
import { ForbiddenNameValidator } from '../username.validator';

@Component({
  selector: 'app-register-reactive-form',
  templateUrl: './register-reactive-form.component.html',
  styleUrls: ['./register-reactive-form.component.scss']
})
export class RegisterReactiveFormComponent implements OnInit {

  constructor(private formbuilder:FormBuilder) { }
 
  registertionForm =this.formbuilder.group({
       username: ['',[Validators.required,ForbiddenNameValidator(/admin/)]],
       Password : ['',[Validators.required,Validators.minLength(6)]],
       confirmPassword :[''],
       subscribe:[false],
       product:['',Validators.required],
       comment:this.formbuilder.array([]),
       discount :['']
  },{Validators:[confirmPasswordVailadators]});
  get subscribe()
  {
    return this.registertionForm.get('subscribe');
  }
  get discount()
  {
    return this.registertionForm.get('discount');
  }
  get username()
  {
    return this.registertionForm.get('username');
  }
  get comment()
  {
    return this.registertionForm.get('comment') as FormArray ;
  }
  get password()
  {
    return this.registertionForm.get('Password');
  }
  get confirmPassword() 
  {
    return this.registertionForm.get('confirmPassword');
  }
  ngOnInit(): void {
  }
  addNewComment()
  {
    this.comment.push(this.formbuilder.control('Hello'));
  }
  product()
  {
    this.registertionForm.get('subscribe')?.valueChanges.subscribe(checkedVlaue=>
      {
        const discount=this.registertionForm.get('discount');
        if(checkedVlaue)
        {
          discount?.setValidators(Validators.required);        
        }
        else
        {
          discount?.clearValidators();
        }
        discount?.updateValueAndValidity();
      })
    }}
