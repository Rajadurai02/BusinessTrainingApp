import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { BusinessinfoComponent } from './businessinfo/businessinfo.component';

const routes: Routes = [
  {path:'',component:BusinessComponent},
  {path:'business',component:BusinessComponent  },
  {path:'business/:id',component:BusinessinfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
