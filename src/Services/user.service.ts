import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { UsersDetails } from 'src/API/UserDetails';
import { IUser } from 'src/app/Shared_Classes&Types/IUser';
import {catchError} from 'rxjs/operators';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  url='https://jsonplaceholder.typicode.com/users';
  fakeUrl=UsersDetails.GetAll;

  returnAllUsers():Observable<IUser[]>
  {
    console.log(this.http.get<IUser[]>(this.url));
    return this.http.get<IUser[]>(this.url).pipe(catchError((err)=>
    {
      return throwError(err.message ||"Server Has Error");
    }));
  }
}
