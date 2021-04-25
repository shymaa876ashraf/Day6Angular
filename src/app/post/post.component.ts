import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/Services/post.service';
import { IPost } from '../Shared_Classes&Types/IPost';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  userPost:IPost[]=[];
  errorMsg="";
  constructor(private userServices:PostService) { }

  ngOnInit(): void {
    this.userServices.returnAllPosts().subscribe(
      serviceData=>
      {
        this.userPost=serviceData;
      },
      errorResponse=>
      {
       this.errorMsg=errorResponse;
      })
    }
  }
