import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {
  productsAPI: string = 'https://fakestoreapi.com/products'

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {

    return this.http.get<Product[]>(this.productsAPI)
      .pipe(
        map(data => data.map(item => ({ ...item, stars: Math.floor(item.rating.rate) }))),
        catchError(error => {
          // Handle errors here, e.g., return an empty array or throw a custom error
          return throwError(error);
        })
      )



  }
}
