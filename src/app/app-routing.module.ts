import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ClientPanelComponent } from './client-panel/client-panel.component';


const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  {path:'client',component:ClientPanelComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
