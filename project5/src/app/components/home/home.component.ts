import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemoService } from 'src/app/services/demo.service';

@Component({

  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {
  constructor(public myService: DemoService, private router:Router) { }
  users: any;
  id: any
  ngOnInit(): void {
    this.myService.GetAllUsers().subscribe({
      next: (res) => { this.users = res },
      error: (err) => { console.log(err) },
    })
    // throw new Error('Method not implemented.');
  }
  deleteUserId(id: any) {
    this.myService.deleteUser(id).subscribe({})
    window.location.reload()
  }
  getUserById(id:any){
    this.router.navigateByUrl(`/users/${id}`)
    // this.myService.getUserById(id).subscribe({})
  }
  UpdateById(id:any){
    this.router.navigateByUrl(`/update/${id}`)
    // this.myService.getUserById(id).subscribe({})
  }

}
