import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  id :any
  constructor(private myactivated :ActivatedRoute,private myservice:DemoService, private router:Router){
    this.id=this.myactivated.snapshot.params['id']
  }
  update(name:any,phone:any,city:any){
    let user={name,phone,city}
    
this.myservice.updateUser(this.id,user).subscribe();
alert("user updated")
this.router.navigateByUrl('/')
  }
}
