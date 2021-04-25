import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { PostsDetails } from 'src/API/UserPost';
import { IPost} from 'src/app/Shared_Classes&Types/IPost';
import {catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  url='https://jsonplaceholder.typicode.com/posts';
  fakeUrl=PostsDetails.GetAll;

  returnAllPosts():Observable<IPost[]>
  {
    return this.http.get<IPost[]>(this.url).pipe(catchError((err)=>
    {
      return throwError(err.message ||"Internal Server error contact site adminstarator");
    }));
  }
}
