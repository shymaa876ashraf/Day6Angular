import { Component, OnInit } from '@angular/core';
import { User } from '../Classes/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 userModel=new User('','',"","","");
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(data: any)
  {
    console.log(data)
    console.log(this.userModel);
  }

}
