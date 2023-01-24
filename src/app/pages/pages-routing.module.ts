import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { AppComponent } from '../app.component';

const routes: Routes = [
  //rutas protegidas
  //rutas hijas
  {path: '', component:PagesComponent},
  // children:[
    {path: 'dashboard', component:DashboardComponent},
    {path: 'category', component:CategoryComponent},
    {path: 'product', component:ProductComponent}
//]
// },


];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
   exports: [
    RouterModule
   ]
})
export class PagesRoutingModule { }
