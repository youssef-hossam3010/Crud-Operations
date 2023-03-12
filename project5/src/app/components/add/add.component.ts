import { Component } from '@angular/core';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  constructor(public myservice:DemoService){}
  Add(name:any,phone:any,city:any){
    let user={name,phone,city}
this.myservice.AddNewUser(user).subscribe();
alert("user added")
  }
}
