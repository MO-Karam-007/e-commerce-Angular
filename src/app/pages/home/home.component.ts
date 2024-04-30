import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductServicesService } from '../../services/product-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  isLoading: boolean = true
  rating = 3;
  constructor(private productService: ProductServicesService,) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(item => {
      this.products = item
      this.isLoading = false
      console.log(`Products : `, this.products);
    },
      error => {
        console.error('Error fetching data:', error);
        this.isLoading = false;
      }
    )
  }



}
