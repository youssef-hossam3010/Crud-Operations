import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-usr-details',
  templateUrl: './usr-details.component.html',
  styleUrls: ['./usr-details.component.css']
})
export class UsrDetailsComponent implements OnInit {
  id:any;
  user:any
  constructor(myactivated : ActivatedRoute, private myservice : DemoService) {
 this.id=myactivated.snapshot.params["id"];
}
  ngOnInit(): void {
this.myservice.getUserById(this.id).subscribe({
  next:(res)=>{
    this.user =res
  },
error:(err)=>{}
}) }
}
