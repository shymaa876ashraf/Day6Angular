import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../Shared_Classes&Types/Enum';
import { IProduct } from '../Shared_Classes&Types/IProduct';
@Component({
  selector: 'app-product-with-discount',
  templateUrl: './product-with-discount.component.html',
  styleUrls: ['./product-with-discount.component.scss']
})
export class ProductWithDiscountComponent implements OnInit {
  ProductList: IProduct[] = [];
  Discount:DiscountOffers;
  constructor() {
    this.ProductList = [{ID: 1, Name: 'T-shirt', Qunatity: 4, Pricce: 100,img:"../../assets/2.jpg"},
    {ID: 2,  Name: 'Clothes', Qunatity: 6, Pricce: 200,img:"../../assets/3.jpg"},
    {ID: 3,  Name: 'Tshirt', Qunatity: 9, Pricce: 300,img:"../../assets/2.jpg"},
   ];
    this.Discount = DiscountOffers.Discount10;
  }

  ngOnInit(): void {
  }

}
