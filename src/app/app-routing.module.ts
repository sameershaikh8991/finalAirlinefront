import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddflightComponent } from './addflight/addflight.component';
import { AllflightComponent } from './allflight/allflight.component';
import { SearchflightComponent } from './searchflight/searchflight.component';
import { UpdateflightComponent } from './updateflight/updateflight.component';


const routes: Routes = [
  {path:'add',component:AddflightComponent},
  {path:'',component:AllflightComponent},
  {path:'update/:fid',component:UpdateflightComponent},
  {path:'search',component:SearchflightComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
