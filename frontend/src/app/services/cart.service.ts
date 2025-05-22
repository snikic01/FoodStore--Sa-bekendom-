import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../shared/models/Cart';
import { Food } from '../shared/models/Food';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() { }

  addToCart(food: Food): void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if (cartItem) 
      return;
    this.cart.items.push(new CartItem(food));
    this.setCartToLocalStorage();
}

  removeFromCart(foodId: string): void {
    this.cart.items = this.cart.items.filter(item => item.food.id !== foodId);
    this.setCartToLocalStorage();
  }

  ChangeQuantity(foodId: string, quantity: number): void {
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if (!cartItem) 
      return;
    //provera da ne bi doslo do gresaka u type scriptu
    cartItem.quantity = quantity;
    cartItem.price = cartItem.food.price * quantity;
    this.setCartToLocalStorage();
  }

  clearCart(): void {
    //samo pravi novi kart, stari se odbacuje
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable(): Observable<Cart> {
    //kada ga pushuje kao asObservable, moguce je pravovremeno usvojiti promene, tj, moguce je da se vrednostima upravlja spolja
    return this.cartSubject.asObservable();
  }

  //Cuvanje karta i nakon refresh-a stranice
  private setCartToLocalStorage(): void {
    //pamcenje predhodne sume cena za trenutno odabrane item-e, i f-cija se poziva za svaki item ponocvo
    this.cart.totalPrice = this.cart.items.reduce((prevSum, Currentitem) => prevSum + Currentitem.price, 0);

    //isto kao i predhodna f-cija, samo za broj item-a
    this.cart.totalCount = this.cart.items.reduce((prevSum, Currentitem) => prevSum + Currentitem.quantity, 0);
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    //obavestiti sve slusaoce cart observable-a da je doslo do promene
    this.cartSubject.next(this.cart);
  }

  //povlacenje podataka iz local storage-a
  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    //f-cija koja pronalazi kart, u suprotnom napravi novi kart
    return cartJson? JSON.parse(cartJson) : new Cart();
  }
}
