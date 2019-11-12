import { Injectable } from '@angular/core';
import { IProduct } from './product';

@Injectable({
    providedIn: 'root'
})

export class ProductService {
getProducts(): IProduct[] {
    return [
        {
          "productId": 1,
          "productName": "MTN 5GB Monthly",
          "productCode": "MTN-0011",
          "releaseDate": "March 19, 2019",
          "description": "Monthly data bundle MTN Zambia 5GB.",
          "price": 100.00,
          "starRating": 3.2,
          "imageUrl": "assets/images/leaf_rake.png"
        },
        {
          "productId": 2,
          "productName": "MTN 12GB Monthly",
          "productCode": "MTN-0023",
          "releaseDate": "March 18, 2019",
          "description": "Monthly data bundle MTN Zambia 12GB",
          "price": 200.00,
          "starRating": 4.2,
          "imageUrl": "assets/images/garden_cart.png"
        },
        {
          "productId": 3,
          "productName": "MTN 25GB Monthly",
          "productCode": "MTN-0048",
          "releaseDate": "May 21, 2019",
          "description": "Monthly data bundle MTN Zambia 25GB",
          "price": 400.00,
          "starRating": 4.8,
          "imageUrl": "assets/images/hammer.png"
        },
        {
          "productId": 4,
          "productName": "MTN 1.5GB Monthly",
          "productCode": "MTN-0022",
          "releaseDate": "May 15, 2019",
          "description": "Monthly data bundle MTN Zambia 1.5GB",
          "price": 50.00,
          "starRating": 3.7,
          "imageUrl": "assets/images/saw.png"
        },
        {
          "productId": 5,
          "productName": "MTN 50GB Monthly",
          "productCode": "GMG-0042",
          "releaseDate": "October 15, 2018",
          "description": "Monthly data bundle MTN Zambia 50GB",
          "price": 650.00,
          "starRating": 4.6,
          "imageUrl": "assets/images/xbox-controller.png"
        }
      ];
}
}