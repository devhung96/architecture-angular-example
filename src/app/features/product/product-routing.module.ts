import { NgModule } from '@angular/core';
import{Routes, RouterModule}  from '@angular/router';
import { ProductDetailViewComponent } from './views/product-detail-view/product-detail-view.component';
import { ProductListViewComponent } from './views/product-list-view/product-list-view.component';


const routes: Routes = [
  {path:'products',component: ProductListViewComponent},
  {path:'product/:productId', component: ProductDetailViewComponent}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports :[RouterModule]
})
export class ProductRoutingModule { }
