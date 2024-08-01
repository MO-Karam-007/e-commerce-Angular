import { Component } from '@angular/core';
// import image1 from './assets/images/planets.jpg'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
name : string = 'Redmi Note 13';
price: number = 5000;
stock : number = 0
color : string = "red"
product: string  = '/assets/images/planet.jpg'
desctiption : string = "Redmi Note 14 - Redmi Note 15 Redmi Note 14 - Redmi Note 15 Redmi Note 14 - Redmi Note 15"; 


discount(){
  return this.price - this.price * 0.1;
}
changeName(event:any){
  console.log(event.target.value);
  this.name = event.target.value
}
}
