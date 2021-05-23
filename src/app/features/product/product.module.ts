import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListViewComponent } from './views/product-list-view/product-list-view.component';
import { ProductDetailViewComponent } from './views/product-detail-view/product-detail-view.component';

@NgModule({
  declarations: [ProductListViewComponent, ProductDetailViewComponent],
  imports: [CommonModule, HttpClientModule, ProductRoutingModule],
})
export class ProductModule {}
