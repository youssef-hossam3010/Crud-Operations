import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor( private myClient : HttpClient) { }
  private Base_URL ='http://localhost:3000/users';
  GetAllUsers(){
    return this.myClient.get(this.Base_URL)
  }
  deleteUser(id : any){
    return this.myClient.delete(this.Base_URL+'/'+id)
  }
  AddNewUser(user:any){
    return this.myClient.post(this.Base_URL,user)
  }
  getUserById(id:any){
    return this.myClient.get(this.Base_URL+'/'+id)  
  }
  updateUser(id:any,user:any){
    return this.myClient.put(this.Base_URL+'/'+id,user)
  }
}
