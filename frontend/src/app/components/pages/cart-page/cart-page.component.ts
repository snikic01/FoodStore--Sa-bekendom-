import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { Cart } from '../../../shared/models/Cart';
import { CartItem } from '../../../shared/models/CartItem';
import { TitleComponent } from "../../partials/title/title.component";
import { RouterLink } from '@angular/router';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { NotFoundComponent } from "../../partials/not-found/not-found.component";

@Component({
  selector: 'app-cart-page',
  imports: [TitleComponent, RouterLink, NgIf, NgFor, CurrencyPipe, NotFoundComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit{

  cart!: Cart;
  constructor(private cartService: CartService) {
    //f-cija za update cart-a iznad
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    });
  }

  ngOnInit(): void {
    // Initialization logic can go here
  }

  removeFromCart(CartItem: CartItem) {
    this.cartService.removeFromCart(CartItem.food.id);
  }

  changeQuantity(CartItem: CartItem, quantityInString: string) {
    const qantity = parseInt(quantityInString);
    this.cartService.ChangeQuantity(CartItem.food.id, qantity);
}
}