import { Component, OnInit } from '@angular/core';
import {UserService } from 'src/Services/user.service';
import { IUser } from 'src/app/Shared_Classes&Types/IUser';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userList:IUser[]=[];
  errorMsg="";
  constructor(private userServices:UserService) { }

  ngOnInit(): void {
    this.userServices.returnAllUsers().subscribe(
      serviceData=>
      {
        this.userList=serviceData;
      },
      errorResponse=>
      {
       this.errorMsg=errorResponse;
      })
    }
  }
