import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.css'],
})
export class ProductListViewComponent implements OnInit {
  products: ProductModel[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe((data) => {
      this.products = data;
      console.log(
        'result get all product:',
        this.products,
        typeof this.products
      );
    });
  }
  actionViewDetail(product: ProductModel): void {
    console.log('action view detail:', product);
    // redirec view detail
    this.router.navigateByUrl(`/product/${product.Id}`);
  }

  actionUpdateDetail(product: ProductModel): void {
    console.log('action UPDATE detail:', product);
  }

  actionDeleteDetail(product: ProductModel): void {
    // CALL API :
    //  success : load page.
    //  faild: alert ra error.
    this.productService.deleteProduct(product.Id).subscribe(
      (response) => {
        console.log('Api delete response:', response);
        this.ngOnInit();
      },
      (error) => {
        console.log('Api delete error:', error);

        window.alert(error.message);
        this.ngOnInit();
      }
    );

    console.log('action DELETE detail:', product);
  }
}
