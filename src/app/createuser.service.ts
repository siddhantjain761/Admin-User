import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Createuser } from './createuser/createuser';

@Injectable({
  providedIn: 'root'
})
export class CreateuserService {

  constructor(private http:HttpClient) { }




 addUser(user?:Createuser):Observable<Object>{
  return this.http.post<Object>('http://localhost:8080/ftr/userProfile',user);


 }

 getuser():Observable<Createuser[]>{
  return this.http.get<Createuser[]>(`http://localhost:8080/ftr/userProfile/${'1'}`)
 }

}
