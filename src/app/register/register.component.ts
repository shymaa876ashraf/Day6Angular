import { Component, OnInit } from '@angular/core';
import { User } from '../Classes/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  topics=["Facebook","Twitter","Google"];
  userModel=new User(
                     'shymaa',
                     'shymaa@gmail.com',
                     '12345',
                     '12345',
                     'Facebppk');

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(data: any)
  {
    console.log(data)
    console.log(this.userModel);
  }

}
