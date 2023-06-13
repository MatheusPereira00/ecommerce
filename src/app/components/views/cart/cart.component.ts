import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { Product } from '../../models/product-interface';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';


@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
    standalone: true,
    imports: [NgFor],
})
export class CartComponent implements OnInit {

  public products: Product[]= [];

  public allProductCart = this.cartService.getItems();

  constructor(public cartService: CartService, private router: Router) {
    // localStorage.setItem('BD', JSON.stringify(this.products));
  }

  ngOnInit(): void {
    //this.cartService.getItems();
    //console.log(this.allProductCart)
  }
  
  public checkout() {
    this.router.navigate(['/checkout']);
  }

}

