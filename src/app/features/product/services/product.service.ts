import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { ProductModel } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  baseUrl: string = 'https://60aa032366f1d00017772494.mockapi.io/api/v1';
  constructor(private httpClient: HttpClient) {}

  getAllProduct(){
    let url = this.baseUrl.concat('/products');
    return this.httpClient.get<ProductModel[]>(url);
  }


  getProduct(productId:string){
    let url = this.baseUrl.concat(`/products/${productId}`);
    return this.httpClient.get<ProductModel>(url);
  }

  deleteProduct(productId:string){
    let url = this.baseUrl.concat(`/products/${productId}`);
    return this.httpClient.delete(url);
  }

}
