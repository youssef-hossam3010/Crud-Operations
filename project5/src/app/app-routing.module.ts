import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { HomeComponent } from './components/home/home.component';
import { UpdateComponent } from './components/update/update.component';
import { UsrDetailsComponent } from './components/usr-details/usr-details.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'users',component:AddComponent},
  {path:'users/:id',component:UsrDetailsComponent},
  {path:'add',component:AddComponent},
  {path:'update/:id',component:UpdateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
