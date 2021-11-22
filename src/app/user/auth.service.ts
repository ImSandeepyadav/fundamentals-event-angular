import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
  currentUser
  constructor(private http: HttpClient){}

  loginUser(userName: string, password: string){
    this.currentUser = {
      id: 1,
      UserName: userName,
      firstName: 'sandy',
      lastName: 'yadav'
    }
  }

  isAuthenticated(){
    return !!this.currentUser;
  }


  updateCurrentUser(firstName:string, lastName:string){
    this.currentUser.firstName = firstName
    this.currentUser.lastName = lastName

    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
    return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
  }

  logout(){
    this.currentUser = undefined;

    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
     return this.http.post('/api/logout', {}, options);
  }

}
