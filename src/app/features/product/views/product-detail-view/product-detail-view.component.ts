import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';


@Injectable({providedIn:'root'})
@Component({
  selector: 'app-product-detail-view',
  templateUrl: './product-detail-view.component.html',
  styleUrls: ['./product-detail-view.component.css'],
})
export class ProductDetailViewComponent implements OnInit {
  productId: string | undefined;
  product: ProductModel | undefined;

  constructor(private router: ActivatedRoute , private productService: ProductService) {}

  ngOnInit(): void {
    this.router.url.subscribe((data) => {
      this.productId = data[1].path;
      this.productService.getProduct(this.productId).subscribe(data =>{
        console.log('Get product detail:',data);
        this.product = data;
      })
    });
  }
}
