import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { RouterModule } from '@angular/router';
import { SharedComponent } from '../shared/shared.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    ProductComponent,
    CategoryComponent,
  ],
  imports: [
    CommonModule,

    RouterModule,
  ],
  exports:[
    DashboardComponent,
    ProductComponent,
    CategoryComponent,
  ]
})
export class PagesModuleModule { };
